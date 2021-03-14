import { MaterialModuleModule } from './../material-module/MaterialModuleModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPokemonRoutingModule } from './all-pokemon-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    AllPokemonRoutingModule,
    MaterialModuleModule
  ]
})
export class AllPokemonModule { }
