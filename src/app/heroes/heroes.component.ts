import { Component, OnInit } from '@angular/core'; //Component import -> Automatically here after 'ng generate component <compName>'
import { InterfaceHero } from '../interface-hero'; //Import Interface called Hero, no ng generate

@Component({ //CLI generated metadata:
  selector: 'app-heroes', // component's css element selector
  templateUrl: './heroes.component.html', // location component's template file
  styleUrls: ['./heroes.component.css'] // location component's private css styles
})
export class HeroesComponent implements OnInit {
  // Properties of Component "HeroesComponent"
  ObjectHero: InterfaceHero = {
    id: 1,
    name: "Object Hero",
    description: "I need special reference (e.g: ObjectHero.description) so that I'll get displayed correctly"
  };

  StringHero = "String Hero";

  constructor() {
  }

  ngOnInit(): void { // lifecycle hook -> Good place to put initialization logic.
  }

}
