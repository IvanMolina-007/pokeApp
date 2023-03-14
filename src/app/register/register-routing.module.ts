import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterLayoutPageComponent } from './pages/register-layout-page/register-layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterLayoutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
