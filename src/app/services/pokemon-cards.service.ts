import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InfoApiPokemon} from "../common/interface-pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonCardsService {

  private URI = 'https://api.pokemontcg.io/v2/cards?page=1&pageSize=20';
  constructor(private html: HttpClient) { }

  getPokemon(): Observable<InfoApiPokemon>{
    return this.html.get<InfoApiPokemon>(this.URI);
  }
}
