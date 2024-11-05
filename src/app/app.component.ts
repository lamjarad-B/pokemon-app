import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list'; // Import de la liste de Pokémons mockée
import { Pokemon } from './pokemon'; // Import du modèle de données d'un Pokémon

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'app.component.html' // pas besoin d'un chemin relatif puisque les deux fichiers se trouvent dans le même dossier
})
export class AppComponent implements OnInit{
  // Déclaration et initialisation de la liste des Pokémons depuis la liste mockée
  // pokemonList est un tableau de Pokemon
  pokemonList:Pokemon[] = POKEMONS;

  ngOnInit(): void {
      console.table(this.pokemonList);// this pour dire la proprièté pokemonList de cet objet

      this.selectPokemon(this.pokemonList[3]);
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }
}
