import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonSelectionLayoutComponent } from './pages/pokemon-selection-layout/pokemon-selection-layout.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path: '', component: PokemonSelectionLayoutComponent},
      { path: '**', redirectTo: ''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonSelectionRoutingModule { }
