import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  // private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonsCompletos(limit: number = 10, offset: number = 0) {
    const url = `${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`;

    return this.http.get<any>(url).pipe(
      switchMap(response => {
        const detalhesRequisicoes = response.results.map((pokemon: any) =>
          this.http.get(pokemon.url)
        );
        return forkJoin(detalhesRequisicoes);
      })
    );
  }
}
