import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  // Initialize undefined variable
  hero: Hero | undefined;
  //hero?: Hero; // default: undefined

  constructor(
    private route: ActivatedRoute, // Extracts the parameters from URL
    private heroService: HeroService, // For hero data (observable)
    private location: Location, // For navigating back to the view that navigated here
  ) {
  }

  ngOnInit(): void {
    this.getHero();
    // Debugging: console.log("Selected Hero: "+ this.hero);
  }

  // to get hero from URL
  getHero():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // subscribe to getHero (it's an observable)
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  // to save hero to server
  save(): void {
    if (this.hero) {
      // subscribe to updateHero (it's an observable)
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

  // for going back to previous view (doesn't matter where you came from)
  goBack(): void {
    // to go back
    this.location.back();
  }
}
