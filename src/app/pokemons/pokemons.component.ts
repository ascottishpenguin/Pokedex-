import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemons/pokemons.model';
import {PokemonService} from 'src/app/pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  providers: [PokemonService]

})
export class PokemonsComponent {

  pokemons: Pokemon[] = [];


  constructor(private pokemonService: PokemonService) {
  this.pokemonService.initPokemon();
  this.pokemonService.pokemons.subscribe(
    data => this.pokemons = data);
  }

  setTypeFilter(type){
    this.pokemonService.setTypeFilter(type);
  }

  setNameFilter(name) {
    this.pokemonService.setNameFilter(name);
  }
}


