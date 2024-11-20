import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonFormComponent],
  template: `
    <h2 class="center">
      Editer {{ pokemon?.name }}
    </h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" alt="pokemon.name">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form> 
    <!--[pokemon] data binding) unidirectionnelle. Elle transmet la valeur de la variable pokemon (dans le parent) à une propriété d’entrée (@Input) du composant enfant app-pokemon-form -->
  `,
  styles: ``
})
export class EditPokemonComponent implements OnInit{
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute, // pour récupérer l'id qui est dans la route
    private pokemonService: PokemonService
  ) {

  }

  ngOnInit(){
    //On récupère l'Id avec le router
    //paramMap.get('id'): extrait la valeur du paramètre nommé id dans l'URL.
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonId){
     //this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
     this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
  }
}
