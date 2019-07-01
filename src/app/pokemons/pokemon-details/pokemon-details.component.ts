import { Component, OnInit, Input } from '@angular/core';
import {PokemonDetail} from 'src/app/pokemons/pokemon-details/pokemon-details.model';
import {Pokemon} from 'src/app/pokemons/pokemons.model';
import {PokemonService} from 'src/app/pokemons/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {


  pokemon: Pokemon;
  pokemonDetail: PokemonDetail;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    const currentPokemon = params.get('id');


    this.pokemonService.fetchPokemons((+currentPokemon - 1), 1).subscribe(pokemonsObservable => {
      // Nesting this subscribe here was the only way I could make it work.
      pokemonsObservable.subscribe(pokemonsData => {
        const pokemonData: any = pokemonsData[0];
        this.pokemon = new Pokemon(
            pokemonData.id,
            pokemonData.name,
            pokemonData.sprites.front_default,
            pokemonData.types[0].type.name,
            pokemonData.types[1].type.name
        );
        console.log(pokemonData.types[1].type.name);
      });
    });

    const call = this.pokemonService.fetchPokemonSpecies(((+currentPokemon))).subscribe(
      (pokemonSpeciesData: any) => {
        const descriptionEntries: any[] = pokemonSpeciesData.flavor_text_entries;
        const englishDescription = descriptionEntries.find(entry => entry.language.name === 'en') || {};
        this.pokemonDetail = new PokemonDetail(englishDescription.flavor_text);
      }
    );
    console.log(this.pokemonDetail);
  }
 ); }
}
