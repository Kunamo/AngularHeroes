import {Component, NgZone, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  // Initialize without values
  slice = {
    start: Number,
    end: Number
  }

  set(valueStart: String, valueEnd: String){
    let numberValueStart = Number(valueStart);
    let numberValueEnd = Number(valueEnd);
    if (valueStart == "" || valueEnd == "") {
      console.log("Please enter a number");
    }
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(numberValueStart, numberValueEnd));
    // Event handling (for example, when entering negative number)
  }

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  // only show 4 heroes (with slice function for heroes array)
  getHeroes(): void {
    // slice modifies observable data (1,4), (possibility to directly modify returned data)
    // Problem: It will execute getting the array and slice it, only on getHeroes() call. How can I change this, that the array
    // even after call will get modified?
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 4));
  }
}
