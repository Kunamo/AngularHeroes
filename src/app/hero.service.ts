import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    // simulate getMethod with of() from rxjs, which returns an Observable. In RL you would get data from a server.
    const heroes = of(HEROES)
    // Use singleton of messageService to send message to subscribers. // TODO: Confirm validity of this comment
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // might crash if id doesn't exist
    // h are heroes in HEROS -> if h.id = id (Param from method)
    const hero = HEROES.find(h => h.id === id)!;

    // ` are for embedding variables in strings. (instead of "some Text " + var, you do `some Text ${var}`)
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  // Inject MessageService in Service to use.
  constructor(private messageService: MessageService) { }
}
