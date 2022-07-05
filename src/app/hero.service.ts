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

  // Inject MessageService in Service to use.
  constructor(private messageService: MessageService) { }
}
