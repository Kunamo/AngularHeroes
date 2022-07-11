import { Component, OnInit } from '@angular/core'; // Boilerplate after 'ng generate component <componentName>'
import { Hero } from '../hero'; // Import And Define Hero - Interface => To create objects of that interface in here
import { HeroService } from '../hero.service'; // Import And Define HeroService
import { MessageService } from '../message.service'; // Import And Define MessageService

// It's a component, with its own style, typescript and view.
@Component({ // Components metadata annotation
  selector: 'app-heroes', // html selector
  templateUrl: './heroes.component.html', // view
  styleUrls: ['./heroes.component.css'] // style
})

// Where the properties of the component go.
export class HeroesComponent implements OnInit {

  // A single property:
  // StringProperty = "I'm a String!";
  // Define in HTML of component as:
  // TODO: Have to find out how to do this in HTML.

  // Make use of Native HTML Elements, as much as possible ->> for better accessibility.

  selectedHero?:Hero; // ? means that value can be null or undefined (optional)
  heroes: Hero[] = []; // From Hero.ts

  // Inject HeroService and MessageService in the component.
  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void { // lifecycle hook -> Good place to put initialization logic.
    this.getHeroes(); // On initialzation of this component, execute get function.
    //console.log("Selected Hero: "+ this.selectedHero);
  }

  getHeroes(): void {
    /* Component (HeroComponent) subscribes to singleton of the service "HeroService" and executes its getHeroes() function
      to put the data in this' component's heroes property. Defined on Line 24 (heroes: Hero[] = [];). It has the type of
      Hero and is in this component known as an empty array */
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
