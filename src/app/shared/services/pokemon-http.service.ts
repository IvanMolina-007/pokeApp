import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonHttpService {
  public url:string = 'https://pokeapi.co/api/v2/'

  constructor( private http:HttpClient) {}


  searchPokemon( search: number | string ):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${ this.url }pokemon/${ search }`)
  }

}
