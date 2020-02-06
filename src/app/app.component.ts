import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Character } from 'src/models/character.model';
import { CharacterFilter } from 'src/models/filter.model';
import {
  distinctUntilChanged,
  takeUntil,
  switchMap,
  tap,
  filter,
  map,
  withLatestFrom,
} from 'rxjs/operators';
import { RickAndMortyService } from './rickandmorty.service';
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
    this.filter$
      .pipe(
        distinctUntilChanged(),
        tap(_ => {
          this.nextPage = null;
          this.loadNext$.next(null);
        }),
        switchMap(filters => this.loadNext$.pipe(map(url => [filters, url]))),
        switchMap(([filters, url]: [CharacterFilter, string]) =>
          url
            ? this.rickAndMortyService.getNextPage(url).pipe(
                withLatestFrom(this.items$),
                map(([data, oldItems]: any[]) => {
                  if (data && data.results && oldItems) {
                    return {
                      ...data,
                      results: [...oldItems, ...data.results],
                    };
                  }
                  return data;
                })
              )
            : this.rickAndMortyService.getCharacters(filters)
        ),
        filter(data => !!data),
        tap((data: any) => {
          this.nextPage = data.info && data.info.next;
          this.items$.next(data.results);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadMore() {
    console.log('loadMore');
    if (this.nextPage) {
      this.loadNext$.next(this.nextPage);
    }
  }
}
