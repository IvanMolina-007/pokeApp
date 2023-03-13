import { NgModule } from '@angular/core';
import { PrimeNgModule } from './../prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterLayoutPageComponent } from './pages/register-layout-page/register-layout-page.component';
import { ImageProfileComponent } from './components/image-profile/image-profile.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    RegisterLayoutPageComponent,
    ImageProfileComponent
  ],
  exports:[
    RegisterLayoutPageComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    RouterModule,
  ]
})
export class RegisterModule { }
