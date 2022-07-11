import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [ // Every component needs to be declared here
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [ // External Imports for the app
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
