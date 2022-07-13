import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
// For observable
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Inject MessageService in Service to use.
  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }


  getHeroes(): Observable<Hero[]> {
    // http.get is typical for observable -> get JSON back (default: untyped)
    // type <HERO[]> because it opens Typescript possibilities & fewer errors during compilation)
    return this.http.get<Hero[]>(this.heroesUrl) // http.put | http.post | http.delete
      .pipe(
        tap(_ => this.log('fetched heroes')), // do something before returning (has no impact on observable itself)
        //map(heroes => heroes.map(hero => ({ ...hero }))),
        catchError(this.handleError<Hero[]>('getHeroes', [])) // Could also just do console.log();
      );

    /**
     * Other APIs may bury the data that you want within an object. You might have to dig that data out by processing the Observable result with the RxJS map() operator.
     */
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    // h are heroes in HEROS -> if h.id = id (Param from method)
    const hero = HEROES.find(h => h.id === id)!;

    // ` are for embedding variables in strings. (instead of "some Text " + var, you do `some Text ${var}`)
    this.log(`fetched hero id=${id}`);

    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  // http.put
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }

  // http.post
  addHero(hero: Hero):Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  // http.delete
  deleteHero(id: Number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  // Search function
  searchHeroes(term: string): Observable<Hero[]>{
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
      this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  //class Employee {
  //     empCode: number;
  //     empName: string;
  //
  //     constructor(code: number, name: string) {
  //         this.empName = name;
  //         this.empCode = code;
  //     }
  //
  //     display = () => console.log(this.empCode +' ' + this.empName)
  // }
  // let emp = new Employee(1, 'Ram');
  // emp.display();

  // Error Handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.

      return of(result as T);// Returns an empty observable, so the app doesn't crash. ON ERROR
    };
  }

  // just a silly message
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
