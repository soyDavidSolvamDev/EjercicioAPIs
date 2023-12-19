import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ErrorComponent} from "./components/error/error.component";
import {ValorantAgentsComponent} from "./components/valorant-agents/valorant-agents.component";
import {MhwWeaponsComponent} from "./components/mhw-weapons/mhw-weapons.component";
import {PokemonCardsComponent} from "./components/pokemon-cards/pokemon-cards.component";
import {FinalspaceCharactersComponent} from "./components/finalspace-characters/finalspace-characters.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'valorant-agents',
    component: ValorantAgentsComponent
  },
  {
    path: 'mhw-weapons',
    component: MhwWeaponsComponent
  },
  {
    path: 'pokemon-cards',
    component: PokemonCardsComponent
  },
  {
    path: 'final-space-characters',
    component: FinalspaceCharactersComponent
  },
  {
    path: '**',
    component: ErrorComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
