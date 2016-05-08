import {Component,Input} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector:"hero-detail-component",
  template:`
  </div>
    <div *ngIf="hero">
     <h5>{{hero.name}} details!</h5>
      <div><label for="id">Id: </label>{{hero.id}}</div>
      <div> <label for="name">Name: </label>
        <input [(ngModel)]=hero.name placeholder=" name">
      </div>
    </div>
  </div>`
})
export class HeroDetailComponent{
  @Input()
  hero:Hero;
}
