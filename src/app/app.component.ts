import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { Character } from 'src/models/character.model';
import { CharacterFilter } from 'src/models/filter.model';
import {
  distinctUntilChanged,
  takeUntil,
  switchMap,
  filter,
  map,
  withLatestFrom,
  catchError,
  skip,
} from 'rxjs/operators';
import { RickAndMortyService } from './rickandmorty.service';

const emptyData = {
  results: [],
  info: {
    next: null,
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rickandmorty';

  destroy$ = new Subject();
  items$ = new BehaviorSubject<Character[]>([]);
  filter$ = new BehaviorSubject<CharacterFilter>(null);
  loadNext$ = new BehaviorSubject<string>(null);

  nextPage: string;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.loadNext$
      .pipe(
        filter(url => !!url),
        switchMap(url =>
          this.rickAndMortyService.getNextPage(url).pipe(
            catchError(_ => of(emptyData)),
            takeUntil(this.filter$.pipe(skip(1))),
            withLatestFrom(this.items$),
            map(([data, oldItems]: any[]) => {
              if (oldItems) {
                return {
                  ...data,
                  results: [...oldItems, ...(data.results || [])],
                };
              }
              return data;
            })
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(data => {
        this.nextPage = data.info && data.info.next;
        this.items$.next(data.results);
      });

    this.filter$
      .pipe(
        distinctUntilChanged(),
        switchMap(filters =>
          this.rickAndMortyService
            .getCharacters(filters)
            .pipe(catchError(_ => of(emptyData)))
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((data: any) => {
        this.nextPage = data.info && data.info.next;
        this.items$.next(data.results);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadMore() {
    if (this.nextPage) {
      this.loadNext$.next(this.nextPage);
    }
  }
}
