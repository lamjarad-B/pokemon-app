import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientInMemoryWebApiModule, FormsModule],
  templateUrl: 'app.component.html' // pas besoin d'un chemin relatif puisque les deux fichiers se trouvent dans le même dossier
})
export class AppComponent implements OnInit{
  // Déclaration et initialisation de la liste des Pokémons depuis la liste mockée
  // pokemonList est un tableau de Pokemon
  // pokemonList:Pokemon[] = POKEMONS;
  // pokemonSelected: Pokemon|undefined;
  
  ngOnInit(): void {
      //console.table(this.pokemonList);// this pour dire la proprièté pokemonList de cet objet

      //this.selectPokemon(this.pokemonList[3]);
  }

  // selectPokemon(pokemonId: string){
  //   const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
  //   if(pokemon){
  //     console.log(`Vous avez demandé le pokemon ${pokemon.name}`);
  //     this.pokemonSelected = pokemon;
  //   } else{
  //     console.log(`Vous avez demandé un pokémon qui n'existe pas`);
  //     this.pokemonSelected = pokemon;
  //   }
    
  // }



  // selectPokemon(event: MouseEvent){
  //   const index : number = +(event.target as HTMLInputElement).value; //permet d'obtenir la valeur du champ input en forçant event.target à être traité comme un élément de type HTMLInputElement. Cela garantit que TypeScript comprend le type exact de l'élément et que la propriété .value est accessible.
  //   //LE + convertit la valeur obtenue en un nombre
  //   console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[index].name}`);// accède au Pokémon situé à l’index spécifié dans la liste pokemonList et affiche son nom.
  // }
}
