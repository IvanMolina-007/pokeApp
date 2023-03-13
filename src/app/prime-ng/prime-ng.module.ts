import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';



const modules = [
  InputTextModule,
  DropdownModule,
  CalendarModule,
  ButtonModule,
  AutoCompleteModule
];


@NgModule({
  declarations: [],
  exports:[...modules],
})
export class PrimeNgModule { }
