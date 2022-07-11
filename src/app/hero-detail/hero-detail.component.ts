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
  // <app-hero-detail [hero]="selectedHero"></app-hero-detail>

  // Initialize hero but undefined
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
    console.log("Selected Hero: "+ this.hero);
  }

  getHero():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
