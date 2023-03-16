import { PokemonHttpService } from './../../../shared/services/pokemon-http.service';
import { Component, OnDestroy, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormDataService } from '../../../shared/services/form-data-service.service';
import { Router } from '@angular/router';


interface PokemonDatails {
  id: number;
  name: string;
  img?: string;
}
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
  isAnAdult:boolean = false;
  $subs!:PushSubscription;
  pokemonList:PokemonDatails[] = [];
  selectedPokemon:any[] = []


  @ViewChild('txtTagInput')
  searchInput!: ElementRef<HTMLInputElement>;

  constructor( private formData:FormDataService,
               private pokemonService: PokemonHttpService,
               private router: Router){

               }


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

    this.url = localStorage.getItem('url')!
    this.name = localStorage.getItem('name')!
    this.hobbie = localStorage.getItem('hobbie')!
    this.age = localStorage.getItem('age')!
    this.personalID = localStorage.getItem('personalID')!
    const newAge = parseInt(this.age)
    if (newAge >= 18 ){
      this.isAnAdult = true
    } else {
      this.isAnAdult = false
    }

    this.getPokemos()

    // console.log( this.pokemonList )
  }

  getPokemos(){
    let pokemonData

    for( let i = 1; i <= 9; i++){
      this.pokemonService.searchPokemon(i)
        .subscribe( resp => {
          // console.log( resp )
          pokemonData = {
            id: resp.id,
            name: resp.name,
            img: resp.sprites.other?.['official-artwork'].front_default
          }

          this.pokemonList.push(pokemonData)
        })
    }
  }

  searchNewPokemon(){
    const inputData = this.searchInput.nativeElement.value;
    let pokemonData
    this.pokemonService.searchPokemon(inputData)
      .subscribe( resp => {
        // console.log( resp )
        pokemonData = {
          id: resp.id,
          name: resp.name,
          img: resp.sprites.other?.['official-artwork'].front_default
        }

        this.pokemonList.unshift(pokemonData)
      })
    this.searchInput.nativeElement.value = ''
  }

  selectCard( index:number, event:any ){
    const element = document.getElementById(`position${index}`);


    if ( this.selectedPokemon.includes( this.pokemonList[index] )){
      console.log('ya esta seleccionado')
      // this.selectedPokemon.splice( index, 1);
      element?.classList.remove('selected');
      this.selectedPokemon = this.selectedPokemon.filter( pokemon => pokemon !== this.pokemonList[index])
    } else {
      console.log( 'agregado', event)
      if( this.selectedPokemon.length === 3 ){
        console.log('solo puedes tener 3 pokemos, puedes deseleeciona y selecionar otros')
        return;
      }
      this.selectedPokemon.push( this.pokemonList[index])
      element?.classList.add('selected');

    }

    console.log( this.selectedPokemon )

  }

  onSubmit(){
    this.pokemonService.threeSelectdPokemons = this.selectedPokemon;
    this.router.navigate(['/home'])

  }


}
