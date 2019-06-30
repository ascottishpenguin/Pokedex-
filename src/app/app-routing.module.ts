import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PokemonsComponent} from './pokemons/pokemons.component';
import {PokemonDetailsComponent} from './pokemons/pokemon-details/pokemon-details.component';


import {Pokemon} from 'src/app/pokemons/pokemons.model';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pokemon', component: PokemonsComponent},
  {path: 'pokemondetails/:id', component: PokemonDetailsComponent},
  {path: '**', redirectTo: 'home'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {POKE_ROUTING = RouterModule.forRoot(routes); }
