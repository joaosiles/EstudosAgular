import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

  constructor(private http: HttpClient) {}

  getPokemonsCompletos() {
    return this.http.get<any>(this.apiUrl).pipe(
      switchMap(response => {
        const detalhesRequisicoes = response.results.map((pokemon: any) =>
          this.http.get(pokemon.url)
        );
        return forkJoin(detalhesRequisicoes);
      })
    );
  }
}
