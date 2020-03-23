import { Component, OnInit } from '@angular/core';
import { JoueurService } from '../service/joueur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Joueurs } from '../model/joueurs';
@Component({
  selector: 'app-deletejoueur',
  templateUrl: './deletejoueur.component.html',
  styleUrls: ['./deletejoueur.component.css']
})
export class DeletejoueurComponent  {

  joueur: Joueurs ;
constructor(
  private route: ActivatedRoute,
  private router: Router,
  private joueurservice: JoueurService
) {
  this.joueur = new Joueurs();
}
deleteJoueur() {
  this.joueurservice.delete(this.joueur.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/joueur']);
      },
      error => {
        console.log(error);
      });
}



}
