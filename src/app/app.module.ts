import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataListModule } from 'src/components/data-list/data-list.module';
import { DataFilterModule } from 'src/components/data-filter/data-filter.module';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'src/components/infinite-scroll/infinite-scroll.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataListModule,
    DataFilterModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
