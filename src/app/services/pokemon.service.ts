import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl: string = ' https://pokeapi.co/api/v2/pokemon/ditto';
  constructor( private http: HttpClient ) { }

  buscarPokemon(): Observable<any> {
    return this.http.get(this.apiUrl)
  }
}
