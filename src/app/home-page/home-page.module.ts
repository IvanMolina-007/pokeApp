import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageLayoutComponent } from './pages/home-page-layout/home-page-layout.component';


@NgModule({
  declarations: [
    HomePageLayoutComponent
  ],
  exports: [
    HomePageLayoutComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
