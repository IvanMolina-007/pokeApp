import { PrimeNgModule } from './../prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterLayoutPageComponent } from './pages/register-layout-page/register-layout-page.component';


@NgModule({
  declarations: [
    RegisterLayoutPageComponent
  ],
  exports:[
    RegisterLayoutPageComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class RegisterModule { }
