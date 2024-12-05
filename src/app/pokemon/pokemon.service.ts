import { response } from 'express';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { error } from 'console';


@Injectable({
  providedIn: 'root',//  Ce paramètre signifie que le service est fourni au niveau de l’application entière (racine)
})

export class PokemonService {

  constructor(private http: HttpClient){}

  getpokemonList(): Observable<Pokemon[]>{ // Cette méthode retourne un observable contenant un tableau d'objets Pokemon. Cela permet d'effectuer des appels HTTP asynchrones et de réagir aux données lorsqu'elles sont disponibles.
    
    return this.http.get<Pokemon[]>('api/pokemon') // Utilise le service Angular HttpClient pour effectuer une requête GET vers l'URL 'api/pokemons'. Cette requête retourne un observable contenant les données au format Pokemon[].
    .pipe(tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, []))
      // tap c'est l'équivalent d'un console.log adapté aux observables
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(tap((response) => this.log(response)), 
    catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: Pokemon[] | Pokemon | undefined){
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue); // le of permet de transformer une donnée simple en un flux de données c-a-d un Observable qui émut la donnée en paramètre
    
  }

  getPokemonTypeList(): string[]{
    return [
      'Plante', 
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy']
  }
}
