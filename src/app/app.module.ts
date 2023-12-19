import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { ValorantAgentsComponent } from './components/valorant-agents/valorant-agents.component';
import { MhwWeaponsComponent } from './components/mhw-weapons/mhw-weapons.component';
import { PokemonCardsComponent } from './components/pokemon-cards/pokemon-cards.component';
import { FinalspaceCharactersComponent } from './components/finalspace-characters/finalspace-characters.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ErrorComponent,
    ValorantAgentsComponent,
    MhwWeaponsComponent,
    PokemonCardsComponent,
    FinalspaceCharactersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
