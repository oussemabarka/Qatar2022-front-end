import { NgModule } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';

import { Routes, RouterModule } from '@angular/router';
import { EquipesComponent } from './equipes/equipes.component';
import { ArbitresComponent } from './arbitres/arbitres.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { MatchsComponent } from './matchs/matchs.component';
import { HomeComponent } from './home/home.component';
import { AddequipesComponent } from './addequipes/addequipes.component';
import { DeleteequipeComponent } from './deleteequipe/deleteequipe.component';
import { DeletearbitresComponent } from './deletearbitres/deletearbitres.component';
import { AddarbitreComponent } from './addarbitre/addarbitre.component';
import { AddjoueurComponent } from './addjoueur/addjoueur.component';
import { DeletejoueurComponent } from './deletejoueur/deletejoueur.component';
import { DeletematchComponent } from './deletematch/deletematch.component';
import { AddmatchComponent } from './addmatch/addmatch.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },

  { path: 'home', component: HomeComponent },
  { path: 'equipe', component: EquipesComponent },
  { path: 'arbitre', component: ArbitresComponent },
  { path: 'joueur', component: JoueursComponent },
  { path: 'match', component: MatchsComponent },
  { path: 'addequipe', component: AddequipesComponent },
  { path: 'deleteequipe', component: DeleteequipeComponent },
  { path: 'deletearbitre', component: DeletearbitresComponent },
  { path: 'addarbitre', component: AddarbitreComponent },
  { path: 'addjoueur', component: AddjoueurComponent },
  { path: 'deletejoueur', component: DeletejoueurComponent },
  { path: 'deletematch', component: DeletematchComponent },
  { path: 'addmatch', component: AddmatchComponent },

{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
