import { Component } from '@angular/core';

import {PokemonService} from './pokemons/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PokemonService]
})
export class AppComponent {
  title = 'pokemon';

  constructor(private pokemonService: PokemonService) {}
}
