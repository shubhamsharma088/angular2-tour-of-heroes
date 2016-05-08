import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector:"my-app",
  template:`
  <div class="container">
  <h1>{{title}}</h1>
  <div class ="row">

  <ul class="collection col s2">
      <li class="collection-item badge" *ngFor="let hero of heroes"
       (click)=onSelect(hero)>
        <span>{{hero.id}}</span>  {{hero.name}}
      </li>
    </ul>
    <hero-detail-component ></hero-detail-component>
      `
    })
export class AppComponent {
  title:"My Heroes";
  heroes=HEROES;
  selectedHero:Hero;
  onSelect(hero:Hero) {this.selectedHero = hero;
  console.log(hero);}

}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];
