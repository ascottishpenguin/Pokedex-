import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemons/pokemons.model';
import {PokemonService} from '../pokemons/pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  providers: [PokemonService]

})
export class PokemonsComponent {
// tslint:disable-next-line: max-line-length
  pokemons: Pokemon[] = [];


  constructor(private pokemonService: PokemonService) {
  this.initPokemon();
  }

  initPokemon() {
    this.pokemonService.fetchPokemons(0, 151).subscribe(pokemonsObservable => {
      // Nesting this subscribe here was the only way I could make it work.
      pokemonsObservable.subscribe(pokemonsData => {
        this.pokemons = pokemonsData.map(
          (pokemonData: any) => new Pokemon(
            pokemonData.id,
            pokemonData.name,
            pokemonData.sprites.front_default
          )
        );
      });
    });
  }


  showPokemonDetails(pokemon: Pokemon) {
    alert(JSON.stringify(pokemon));
  }
}


