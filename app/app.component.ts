import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';


@Component({
  selector:'my-app',
  template:`<h1>{{title}}</h1>
            <nav>
              <a [routerLink]="['DashBoard']">DASHBOARD</a>
              <a [routerLink]="['Heroes']">HEROES</a>
            </nav>
            <router-outlet></router-outlet>`,
  styleUrls:['app/app.component.css'],          
  directives:[ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]

})
@RouteConfig([{
  path:'/dashboard',
  name:'DashBoard',
  component: DashboardComponent,
  useAsDefault:true
},{
  path:'/heroes',
  name:'Heroes',
  component: HeroesComponent
},{
  path:'/detail/:id',
  name:'HeroDetail',
  component: HeroDetailComponent
}
])
export class AppComponent{
  title = "Tour Of Heroes";
}
