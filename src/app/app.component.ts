//Automatically imports after ng generate component <componentName>
import { Component } from '@angular/core';

@Component({ // Components metadata
  selector: 'app-root', // html selector
  templateUrl: './app.component.html', // view
  styleUrls: ['./app.component.css']  // css
})

export class AppComponent {
  // Component properties
  title = 'The Heroes App';
}
