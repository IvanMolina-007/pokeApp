import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PokemonSelectionRoutingModule } from './pokemon-selection-routing.module';
import { PokemonSelectionLayoutComponent } from './pages/pokemon-selection-layout/pokemon-selection-layout.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    PokemonSelectionLayoutComponent
  ],
  imports: [
    PokemonSelectionRoutingModule,
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    PokemonSelectionLayoutComponent
  ]
})
export class PokemonSelectionModule { }
