import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Character } from 'src/models/character.model';

@Component({
  selector: 'app-data-list-item',
  templateUrl: './data-list-item.component.html',
  styleUrls: ['./data-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataListItemComponent implements OnInit {
  @Input() item: Character;

  constructor() {}

  ngOnInit() {}
}
