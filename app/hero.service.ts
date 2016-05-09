import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';

@Injectable()
export class HeroService {

    //could get the data from a web service or local storage or from a mock data source
    getHeroes (){
     return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>setTimeout(()=>resolve(HEROES), 2000)); // 2 seconds

  }
}
