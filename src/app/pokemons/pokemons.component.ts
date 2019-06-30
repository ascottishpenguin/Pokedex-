import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemons/pokemons.model';
import {PokemonService} from '../pokemons/pokemon.service';
import { PageEvent} from '@angular/material';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  providers: [PokemonService]

})
export class PokemonsComponent {
// tslint:disable-next-line: max-line-length
  pokemons: Pokemon[] = [];

  length = 100;
  pageSize = 10;
  pageSizeOptions = [1, 2, 5, 10];

  constructor(private pokemonService: PokemonService) {
  this.initPokemon();
  }

  initPokemon() {
    this.pokemonService.fetchPokemons().subscribe(pokemonsObservable => {
      // Nesting this subscribe here was the only way I could make it work.
      pokemonsObservable.subscribe(pokemonsData => {
        this.pokemons = pokemonsData.map(
          (pokemonData: any) => new Pokemon(
            pokemonData.id,
            pokemonData.name,
            pokemonData.sprites.front_default
          )
        );

        console.log(this.pokemons);
      });
    });
  }

  showPokemonDetails(pokemon: Pokemon) {
    alert(JSON.stringify(pokemon));
  }
}


