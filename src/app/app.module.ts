import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EquipesComponent } from './equipes/equipes.component';
import { ArbitresComponent } from './arbitres/arbitres.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { MatchsComponent } from './matchs/matchs.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EquipesComponent,
    ArbitresComponent,
    JoueursComponent,
    MatchsComponent,
    HomeComponent

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
