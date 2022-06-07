// ng generate component heroes
import { Component, OnInit } from '@angular/core'; //Always if generated new component.
import { Hero } from '../hero';

@Component({ //CLI generated metadata:
  selector: 'app-heroes', // component's css element selector
  templateUrl: './heroes.component.html', // location component's template file
  styleUrls: ['./heroes.component.css'] // location component's private css styles
})
export class HeroesComponent implements OnInit {
  // Properties of Component "HeroesComponent"

  ObjectHero: Hero = {
    id: 1,
    name: "I'm an object hero",
    description: "I need special reference (e.g: ObjectHero.description) so that I'll get displayed correctly"
  };

  StringHero = "I'm a string";

  constructor() {
  }

  ngOnInit(): void { // lifecycle hook -> Good place to put initialization logic.
  }

}
