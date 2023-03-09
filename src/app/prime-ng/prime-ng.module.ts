import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';






@NgModule({
  declarations: [],
  exports:[
    InputTextModule,
    DropdownModule,
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule,
    AutoCompleteModule
  ]

})
export class PrimeNgModule { }
