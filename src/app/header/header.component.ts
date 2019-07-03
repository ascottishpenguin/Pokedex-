import { Component, OnInit, Injectable } from '@angular/core';
import { PokemonService} from 'src/app/pokemon.service';


@Injectable({
  providedIn: 'root',
})


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
  }

}
