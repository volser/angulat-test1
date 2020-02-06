import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Character } from 'src/models/character.model';
import { CharacterFilter } from 'src/models/filter.model';
import { distinctUntilChanged, takeUntil, switchMap, tap } from 'rxjs/operators'
import { RickAndMortyService } from './rickandmorty.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rickandmorty';

  destroy$ = new Subject();
  items$ = new BehaviorSubject<Character[]>([]);
  filter$ = new BehaviorSubject<CharacterFilter>(null);

  constructor(private rickAndMortyService: RickAndMortyService) {

  }

  ngOnInit() {
    this.filter$.pipe(
      distinctUntilChanged(),
      switchMap(filters => this.rickAndMortyService.getCharacters(filters)),
      tap((data: any) => {
        console.log('data', data);
        this.items$.next(data.results);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadMore() {
    console.log('loadMore');
  }
}
