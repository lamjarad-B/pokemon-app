import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { BorderCardDirective } from '../border-card.directive';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PokemonTypeColorPipe, BorderCardDirective],
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent {
  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined; // Pour  stocker le pokemon courant

  // On injecte ActivatedRoute dans le constructeur afin de récupérer la route activée dès l'appelle de ce composant
  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.pokemonList = POKEMONS;
    //On récupère l'Id avec le router
    //paramMap.get('id'): extrait la valeur du paramètre nommé id dans l'URL.
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonId){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
    //const pokemonId = +this.route.snapshot.params['id'];

  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }
}
