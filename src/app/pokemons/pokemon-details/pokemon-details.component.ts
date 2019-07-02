import { Component, OnInit, Input } from '@angular/core';
import {PokemonDetail} from 'src/app/pokemons/pokemon-details/pokemon-details.model';
import {Pokemon2} from 'src/app/pokemons/pokemon-details/pokemon-details2.model';
import {Pokemon} from 'src/app/pokemons/pokemons.model';
import {PokemonService} from 'src/app/pokemons/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {


  pokemon: Pokemon2;
  pokemonDetail: PokemonDetail;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    const currentPokemon = params.get('id');


    this.pokemonService.fetchPokemons((+currentPokemon - 1), 1).subscribe(pokemonsObservable => {
      // Nesting this subscribe here was the only way I could make it work.
      pokemonsObservable.subscribe(pokemonsData => {
        const pokemonData: any = pokemonsData[0];

        const pokeType2 = () =>  {
          let pokeType2data = '';
          if (pokemonData.types.length > 1) {
          pokeType2data = pokemonData.types[1].type.name;
          } else { pokeType2data = ''; }
          return pokeType2data;
          };


        this.pokemon = new Pokemon2(
            pokemonData.id,
            pokemonData.name,
            pokemonData.sprites.front_default,
            pokemonData.types[0].type.name,
            pokeType2()
        );

      });
    });

    const call = this.pokemonService.fetchPokemonSpecies(((+currentPokemon))).subscribe(
      (pokemonSpeciesData: any) => {
        const descriptionEntries: any[] = pokemonSpeciesData.flavor_text_entries;
        const englishDescription = descriptionEntries.find(entry => entry.language.name === 'en') || {};
        this.pokemonDetail = new PokemonDetail(englishDescription.flavor_text);
      }
    );
  }
 ); }
}
