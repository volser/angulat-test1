import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Character } from 'src/models/character.model';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'data-list',
  },
})
export class DataListComponent implements OnInit {
  @Input() items: Character[];

  constructor() {}

  ngOnInit() {}

  trackByFn(index: number, item: Character) {
    return item && item.id;
  }
}
