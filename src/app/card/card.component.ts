import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../services/pokemon.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  pokemon: any;

  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.pokemonService.buscarPokemon().subscribe((res) => {
      this.pokemon = res;
      console.log(this.pokemon);
    });
  }

}
