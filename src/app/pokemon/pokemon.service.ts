import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable({
  providedIn: 'root'//  Ce paramètre signifie que le service est fourni au niveau de l’application entière (racine)
})
export class PokemonService {

  getpokemonList(): Pokemon[]{ // Cette méthode renvoie une liste de Pokemon
    return POKEMONS; // Renvoie la liste de tous nos pokemons
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
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
