import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  startN: number = 1;
  endN: number = 4;

  checkValues(): void {
    if (! this.startN == null && ! this.endN == null) {
      this.getHeroes();
    }
    else
    {
      console.log("Please enter valid values");
    }
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
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(this.startN, this.endN));
  }
}
