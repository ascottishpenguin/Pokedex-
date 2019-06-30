import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class PokemonService {
  constructor(private http: HttpClient) {}

  fetchPokemons() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
    .pipe(
      map((response: any) => response.results.map(pokemon => pokemon.url)),
      map(pokemonUrls => forkJoin(pokemonUrls.map(url => this.http.get(url))))
    );
  }

}

