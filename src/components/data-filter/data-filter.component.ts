import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CharacterFilter } from '../../models/filter.model';
import { CharacterStatus, CharacterGender } from '../../models/character.model';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'data-filter',
  },
})
export class DataFilterComponent implements OnInit, OnDestroy {
  @Input() data: CharacterFilter;

  @Output() onChange = new EventEmitter<CharacterFilter>();

  CharacterStatus = CharacterStatus;
  CharacterGender = CharacterGender;

  destroy$ = new Subject();
  nameChanged$ = new Subject<string>();
  typeChanged$ = new Subject<string>();
  speciesChanged$ = new Subject<string>();

  debounceTime = 250;

  constructor() {}

  ngOnInit() {
    this.nameChanged$
      .pipe(debounceTime(this.debounceTime), takeUntil(this.destroy$))
      .subscribe(name => {
        this.onChange.emit({ ...this.data, name });
      });

    this.typeChanged$
      .pipe(debounceTime(this.debounceTime), takeUntil(this.destroy$))
      .subscribe(type => {
        this.onChange.emit({ ...this.data, type });
      });

    this.speciesChanged$
      .pipe(debounceTime(this.debounceTime), takeUntil(this.destroy$))
      .subscribe(species => {
        this.onChange.emit({ ...this.data, species });
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  nameChange(value: string) {
    this.nameChanged$.next(value);
  }

  typeChange(value: string) {
    this.typeChanged$.next(value);
  }

  speciesChange(value: string) {
    this.speciesChanged$.next(value);
  }

  statusChange(status: CharacterStatus) {
    this.onChange.emit({ ...this.data, status });
  }

  genderChange(gender: CharacterGender) {
    this.onChange.emit({ ...this.data, gender });
  }
}
