import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipesComponent } from './equipes/equipes.component';
import { ArbitresComponent } from './arbitres/arbitres.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { MatchsComponent } from './matchs/matchs.component';
import { HomeComponent } from './home/home.component';
import { AddequipesComponent } from './addequipes/addequipes.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'equipe', component: EquipesComponent },
  { path: 'arbitre', component: ArbitresComponent },
  { path: 'joueur', component: JoueursComponent },
  { path: 'match', component: MatchsComponent },
  { path: 'addequipe', component: AddequipesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
