import { Component, OnInit } from '@angular/core';
import { PokemonService} from "./services/pokemon.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokedex';
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonsCompletos().subscribe((res: any) => {
      this.pokemons = res;
    });
  }
}
