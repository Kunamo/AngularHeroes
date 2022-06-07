// Auto import after 'ng generate component <componentName>'
import { Component, OnInit } from '@angular/core';

// Import interface "InterfaceHero", to be able to create objects of that interface (almost like an constructor)
import { InterfaceObject } from '../interface-object'; //Import Interface called Hero, no ng generate

@Component({ // Components metadata:
  selector: 'app-heroes', // html selector
  templateUrl: './heroes.component.html', // view
  styleUrls: ['./heroes.component.css'] // style
})
export class HeroesComponent implements OnInit {
  // Components properties (HeroesComponent)

  // Use interface "InterfaceHero" to create object according to scheme.
  // name Object "ObjectHero" and give it the type "InterfaceHero"
  Object: InterfaceObject = {
    // Follow the scheme of "InterfaceHero"
    id: 1, // id int
    name: "Object", // name string
    description: "Refer to objects (such like myself) in 'content' from 'view' by: {{objectName.property}}. Thats how you display objects content specified in 'content', in the 'view'" // description string
  };

  SingleStringPropertyOfHeroComponent = "I'm a String!";

  constructor() {
  }

  ngOnInit(): void { // lifecycle hook -> Good place to put initialization logic.
  }

}
