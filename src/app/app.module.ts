import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataListModule } from '../components/data-list/data-list.module';
import { DataFilterModule } from '../components/data-filter/data-filter.module';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from '../components/infinite-scroll/infinite-scroll.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataListModule,
    DataFilterModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
