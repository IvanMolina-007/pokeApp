import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageLayoutComponent } from './pages/home-page-layout/home-page-layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomePageLayoutComponent},
      { path: '**', redirectTo: ''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
