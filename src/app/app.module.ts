import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ // Every component needs to be declared here
    AppComponent,
    HeroesComponent
  ],
  imports: [ // External Imports for the app
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
