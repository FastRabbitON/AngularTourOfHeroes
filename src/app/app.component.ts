import { Component } from '@angular/core';

// Decorator function - określa metadane dla komponentu
@Component({
  selector: 'app-root',  //Odwołanie do komponentu
  templateUrl: './app.component.html',  //Zawartośc komponentu
  styleUrls: ['./app.component.css'] //Style dla komponentu
})
export class AppComponent {
  // Stałe, zmienne i funkcje dla komponentu?
  title = 'Tour of Heroes';
}
