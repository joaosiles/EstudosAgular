import { Component } from '@angular/core';
import { PokemonService} from "./services/pokemon.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokedex';
  pokemons: any[] = [];
  currentPage: number = 0;
  limit: number = 10;

  constructor(private pokemonService: PokemonService) { }

  // ngOnInit(): void {
  //   this.pokemonService.getPokemonsCompletos().subscribe((res: any) => {
  //     this.pokemons = res;
  //   });
  // }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons():void {
    const offset = this.currentPage * this.limit;
    this.pokemonService.getPokemonsCompletos(this.limit, offset).subscribe((res: any) => {
      this.pokemons = res;
    })
  }

  nextPage(): void {
    this.currentPage++;
    this.loadPokemons();
  }

  previousPage(): void {
    this.currentPage--;
    this.loadPokemons();
  }
}
