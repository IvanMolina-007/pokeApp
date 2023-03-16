import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule} from 'primeng/autocomplete';
import { OrderListModule } from 'primeng/orderlist';





const modules = [
  InputTextModule,
  DropdownModule,
  CalendarModule,
  ButtonModule,
  AutoCompleteModule,
  OrderListModule
];


@NgModule({
  declarations: [],
  exports:[...modules],
})
export class PrimeNgModule { }
