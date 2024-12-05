import { PokemonTypeColorPipe } from './../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { PokemonService } from './../pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [CommonModule, FormsModule, PokemonTypeColorPipe],
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];
  constructor(private pokemonService: PokemonService, private router: Router){}

  ngOnInit(){
    // pokemonTypeList
    this.types = this.pokemonService.getPokemonTypeList();

  }

  // Pour pré-coucher le type initile du pokémon
  hasType(type: string): boolean{
    return this.pokemon.types.includes(type);// vérifie si un type spécifique est présent dans la liste des types du Pokémon. 
    // includes une fonction de tableau en JavaScript, qui : Parcourt le tableau this.pokemon.types. Renvoie true si le tableau types contient l’élément type, sinon false.
  }

  selectType($event: Event, type: string){ // $event pour savoir si il a couché ou découché, type pour savoir si il a couché ou découché quel type
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.pokemon.types.push(type);
    }else{
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1)
      //indexOf(type) trouve la position du type dans le tableau this.pokemon.types.
      //splice(index, 1) supprime le type à cet index du tableau.
    }
  }

  isTypeValid(type: string): boolean{
    
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }

    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
      // si 3 types sont cochés, On lui permet de décocher les cases qui sont sélectionnées mais pas en rajouter
    }

    return true;
  }

  onSubmit(){
    console.log('Submit form !')
    this.router.navigate(['/pokemons', this.pokemon.id]);
  }

}
