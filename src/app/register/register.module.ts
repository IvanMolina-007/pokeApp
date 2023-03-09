import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterLayoutPageComponent } from './pages/register-layout-page/register-layout-page/register-layout-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
