import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api"; // not angular
import { InMemoryDataService} from "./in-memory-data.service"; // service i myself defined
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [ // Every component needs to be declared here
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [ // External Imports for the app
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
