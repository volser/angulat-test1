import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CharacterFilter } from 'src/models/filter.model';
import { CharacterStatus, CharacterGender } from 'src/models/character.model';

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
export class DataFilterComponent implements OnInit {

  @Input() data: CharacterFilter;

  CharacterStatus = CharacterStatus;
  CharacterGender = CharacterGender;
  
  constructor() { }

  ngOnInit() {
  }

}
