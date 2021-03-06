import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EquipesComponent } from './equipes/equipes.component';
import { ArbitresComponent } from './arbitres/arbitres.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { MatchsComponent } from './matchs/matchs.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AddequipesComponent } from './addequipes/addequipes.component';
import { DeleteequipeComponent } from './deleteequipe/deleteequipe.component';
import { DeletearbitresComponent } from './deletearbitres/deletearbitres.component';
import { AddarbitreComponent } from './addarbitre/addarbitre.component';
import { AddjoueurComponent } from './addjoueur/addjoueur.component';
import { DeletejoueurComponent } from './deletejoueur/deletejoueur.component';
import { DeletematchComponent } from './deletematch/deletematch.component';
import { AddmatchComponent } from './addmatch/addmatch.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EquipesComponent,
    ArbitresComponent,
    JoueursComponent,
    MatchsComponent,
    HomeComponent,
    FooterComponent,
    AddequipesComponent,
    DeleteequipeComponent,
    DeletearbitresComponent,
    AddarbitreComponent,
    AddjoueurComponent,
    DeletejoueurComponent,
    DeletematchComponent,
    AddmatchComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
