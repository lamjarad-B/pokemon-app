import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, RouterOutlet } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { BorderCardDirective } from '../border-card.directive';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PokemonTypeColorPipe, BorderCardDirective],
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent {

  pokemonList:Pokemon[] = POKEMONS;

  constructor(private router: Router){}
  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemons', pokemon.id]);
  }

}
