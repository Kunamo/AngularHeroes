// Auto import after 'ng generate component <componentName>'

// It's a component, with it's own style, typescript and view.
import { Component, OnInit } from '@angular/core';

// Import the list called "HEROES" in mock-heroes.ts
import { HeroService } from '../hero.service';

// Import interface "InterfaceHero", to be able to create objects of that interface (almost like an constructor)
import { Hero } from '../hero'; //Import Interface called Hero, no ng generate

@Component({ // Components metadata:
  selector: 'app-heroes', // html selector
  templateUrl: './heroes.component.html', // view
  styleUrls: ['./heroes.component.css'] // style
})


export class HeroesComponent implements OnInit {

  selectedHero?:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  // Components properties (HeroesComponent)

  // Use interface "InterfaceObject" to create object according to the interface's scheme.
  // name Object "InterfaceObject" and give it the type "InterfaceHero"

  // Make use of Native HTML Elements, as much as possible ->> for better accessibility.

  // A single property
  SingleStringPropertyOfHeroComponent = "I'm a String!";

  // Assign to variable to expose for binding.
  heroes: Hero[] = [];

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void { // lifecycle hook -> Good place to put initialization logic.
    this.getHeroes();
  }

}
