import { PokemonService } from './../pokemon.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';

import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe],
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent {
  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined; // Pour  stocker le pokemon courant

  // On injecte ActivatedRoute dans le constructeur afin de récupérer la route activée dès l'appelle de ce composant
  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService){}

  ngOnInit(){
    //this.pokemonList = POKEMONS;
    //On récupère l'Id avec le router
    //paramMap.get('id'): extrait la valeur du paramètre nommé id dans l'URL.
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonId){
     //this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
     this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
    //const pokemonId = +this.route.snapshot.params['id'];

  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon){
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }
}
