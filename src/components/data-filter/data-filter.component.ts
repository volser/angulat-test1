import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
