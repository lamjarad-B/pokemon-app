import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonService } from './pokemon.service';
//import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    //PokemonFormComponent
  ],

  providers: [PokemonService]
})
export class PokemonModule { }
