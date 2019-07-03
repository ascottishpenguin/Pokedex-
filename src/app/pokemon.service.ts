import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { Pokemon } from 'src/app/pokemons/pokemons.model';


@Injectable({
  providedIn: 'root',
})

export class PokemonService {
  constructor(private http: HttpClient) {}

  pokemons: Subject <Pokemon[]> = new Subject();
  pokemonsOriginal: Pokemon [] = [];

  fetchPokemons(offset: number, limit: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
    .pipe(
      map((response: any) => response.results.map(pokemon => pokemon.url)),
      map(pokemonUrls => forkJoin(pokemonUrls.map(url => this.http.get(url))))
    );
  }
  fetchPokemonSpecies(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
}

setTypeFilter(type) {
  const pokemonFilter = this.pokemonsOriginal.filter( x => {
    if (x.type1 === type) {
      return true;
  }
    if (x.type2 === type) {
     return true;
   }
    return false;
});
  this.pokemons.next(pokemonFilter);
}

setNameFilter(name) {
  const pokemonFilter = this.pokemonsOriginal.filter( x => {
    if (x.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
      return true;
  }
    return false;
});
  this.pokemons.next(pokemonFilter);
}


initPokemon() {
  this.fetchPokemons(0, 151).subscribe(pokemonsObservable => {
    // Nesting this subscribe here was the only way I could make it work.

    pokemonsObservable.subscribe(pokemonsData => {
      const pokemonMap = pokemonsData.map(
        (pokemonData: any) => new Pokemon(
          pokemonData.id,
          pokemonData.name,
          pokemonData.sprites.front_default,
          pokemonData.types[0].type.name,
          pokemonData.types.length > 1 ? pokemonData.types[1].type.name : undefined,
        )
      );
      this.pokemonsOriginal = pokemonMap;
      this.pokemons.next(pokemonMap);
    });

  });
}
}

