import {Component, OnInit} from '@angular/core';
import {InfoApiPokemon, Pokemons} from "../../common/interface-pokemon";
import {PokemonCardsService} from "../../services/pokemon-cards.service";

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.css']
})
export class PokemonCardsComponent implements OnInit{
  dataApi!: InfoApiPokemon;
  pokemons: Pokemons[] = [];

  constructor(private pokeservice: PokemonCardsService) {
  }

  ngOnInit() {
    this.loadPokemons();
  }

  private loadPokemons() {
    this.pokeservice.getPokemon().subscribe(
      {
        next: datos =>{
          this.dataApi = datos;
          this.pokemons = this.dataApi.data;
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log('Done');
        }
      }
    )
  }
}
