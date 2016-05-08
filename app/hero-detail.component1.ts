import { Component, Input } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'my-hero-detail',
  template: `
    <div class="row" *ngIf="hero">
      <h4>{{hero.name}} details!</h4>
      <div><label for ="id"> ID: </label>{{hero.id}} </div>
      <div>
        <label>name: </label>
        <input class="input-field col s2" [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
