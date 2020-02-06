import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFilterComponent } from './data-filter.component';
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  declarations: [DataFilterComponent],
  exports: [DataFilterComponent],
})
export class DataFilterModule {}
