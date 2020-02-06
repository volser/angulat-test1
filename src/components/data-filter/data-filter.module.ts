import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFilterComponent } from './data-filter.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DataFilterComponent],
  exports: [DataFilterComponent],
})
export class DataFilterModule { }
