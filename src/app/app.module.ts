import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WikipediaSearchComponent } from './wikipedia-search/wikipedia-search.component';
import { WikipediaServiceService } from './wikipedia-search/wikipedia-service.service';

@NgModule({
  declarations: [
    AppComponent,
    WikipediaSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    WikipediaServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
