import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service1';

@Component({
  selector: "my-app",
  template: `
  <div class="container">
  <h1>{{title}}</h1>
  <div class ="row">
      <ul class="collection col s2">
          <li  class="collection-item" *ngFor="let hero of heroes" (click)="onSelect(hero)">
            <span>{{hero.id}}</span>  {{hero.name}}</li>
      </ul>
  </div>
      <my-hero-detail [hero]="selectedHero" ></my-hero-detail>
    </div>`
    , directives: [HeroDetailComponent],
     providers:[HeroService]
    })
export class AppComponent implements OnInit {
  title:"My Heroes";
  heroes:Hero[];
  selectedHero:Hero;
  constructor(private heroService: HeroService){}

  getHeroes(){
    this.heroService.getHeroes().then(heroes => this.heroes=heroes);
  }

  ngOnInit(){
    this.getHeroes();
  }

  onSelect(hero:Hero) {this.selectedHero = hero;}

}
