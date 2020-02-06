import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListComponent } from './data-list.component';
import { DataListItemComponent } from './data-list-item/data-list-item.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DataListComponent, DataListItemComponent],
  exports: [DataListComponent]
})
export class DataListModule { }
