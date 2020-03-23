import { Component, OnInit } from '@angular/core';
import { Joueurs } from '../model/joueurs';
import { JoueurService } from '../service/joueur.service';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {
  joueur: Joueurs[];

  constructor(private joueurservice: JoueurService) { }

  ngOnInit() {
    this.joueurservice.getlistejoueur().subscribe(data => {
      this.joueur = data;

    });
  }

}
