import { Component, OnInit } from '@angular/core';
import { PokemonHttpService } from '../../../shared/services/pokemon-http.service';
import { Pokemon } from '../../../shared/interfaces/pokemon.interface';

@Component({
  selector: 'app-home-page-layout',
  templateUrl: './home-page-layout.component.html',
  styleUrls: ['./home-page-layout.component.scss']
})
export class HomePageLayoutComponent implements OnInit{
  selectedPokemon!: Pokemon[]

  constructor( private pokemonService: PokemonHttpService ){}

  ngOnInit(): void {
    this.selectedPokemon = this.pokemonService.threeSelectdPokemons
    console.log('from homepage', this.selectedPokemon );
  }

}
