import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataListModule } from 'src/components/data-list/data-list.module';
import { DataFilterModule } from 'src/components/data-filter/data-filter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataListModule,
    DataFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
