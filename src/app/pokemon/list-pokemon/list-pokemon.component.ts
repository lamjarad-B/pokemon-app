import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
//import { POKEMONS } from '../mock-pokemon-list';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe, BorderCardDirective],
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit{

  //pokemonList:Pokemon[] = POKEMONS;
  pokemonList:Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService){}

  ngOnInit(){
    this.pokemonService.getpokemonList() //On récupère un Observable de notre service
    .subscribe(pokemonList => this.pokemonList = pokemonList); // subscribe permet de s'abonné à l'observable (this.pokemonService.getpokemonList()), on récupère pokemonList et on la pousse dans la propriété pokemonList du composant
  }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemons', pokemon.id]);
  }

}
