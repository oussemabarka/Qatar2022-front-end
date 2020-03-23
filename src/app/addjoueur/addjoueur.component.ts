import { Component, OnInit } from '@angular/core';
import { Joueurs } from '../model/joueurs';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurService } from '../service/joueur.service';

@Component({
  selector: 'app-addjoueur',
  templateUrl: './addjoueur.component.html',
  styleUrls: ['./addjoueur.component.css']
})
export class AddjoueurComponent  {
  joueur: Joueurs ;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private joueurservice: JoueurService
  ) {
    this.joueur = new Joueurs();
  }
  onSubmit() {
    this.joueurservice.addjoueur(this.joueur).subscribe(result => this.gotoequipeslist() + JSON.stringify(this.joueur, null, 4));
  }
  gotoequipeslist() {
    this.router.navigate(['/joueur']);
  }


}
