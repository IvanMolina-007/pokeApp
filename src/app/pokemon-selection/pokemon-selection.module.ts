import { NgModule } from '@angular/core';

import { PokemonSelectionRoutingModule } from './pokemon-selection-routing.module';
import { PokemonSelectionLayoutComponent } from './pages/pokemon-selection-layout/pokemon-selection-layout.component';


@NgModule({
  declarations: [
    PokemonSelectionLayoutComponent
  ],
  imports: [
    PokemonSelectionRoutingModule,
  ],
  exports: [
    PokemonSelectionLayoutComponent
  ]
})
export class PokemonSelectionModule { }
