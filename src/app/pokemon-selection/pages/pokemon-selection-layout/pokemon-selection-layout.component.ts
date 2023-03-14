import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormDataService } from '../../../shared/services/form-data-service.service';

@Component({
  selector: 'app-pokemon-selection-layout',
  templateUrl: './pokemon-selection-layout.component.html',
  styleUrls: ['./pokemon-selection-layout.component.scss']
})
export class PokemonSelectionLayoutComponent implements OnInit, OnDestroy {
  url!:string;
  name!:string;
  hobbie!:string;
  age!:string;
  personalID!:string;

  $subs!:PushSubscription;

  constructor( private formData:FormDataService){}


  ngOnDestroy(): void {
    // this.$subs.unsubscribe()
  }


  ngOnInit(): void {
    // this.$subs = this.formData.receiveFormData()
    //   .subscribe( data => {
    //     this.name = data.name
    //     this.url = data.url
    //     this.hobbie = data.hobbie.name
    //     this.age = data.age
    //     this.personalID = data.personalID
    //   })

      console.log( this.name)
      console.log('se ejecuto OnInit')

      this.url = localStorage.getItem('url')!
      this.name = localStorage.getItem('name')!
      this.hobbie = localStorage.getItem('hobbie')!
      this.age = localStorage.getItem('age')!
      this.personalID = localStorage.getItem('personalID')!

  }

}
