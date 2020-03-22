import { Component, OnInit } from '@angular/core';
import { Equipes } from '../model/equipes';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipeService } from '../service/equipe.service';

@Component({
  selector: 'app-addequipes',
  templateUrl: './addequipes.component.html',
  styleUrls: ['./addequipes.component.css']
})
export class AddequipesComponent   {
equipes: Equipes ;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private equipeservice: EquipeService
  ) {
    this.equipes = new Equipes();
  }

  onSubmit() {
    this.equipeservice.addequipe(this.equipes).subscribe(result => this.gotoequipeslist() + JSON.stringify(this.equipes, null, 4));
  }
  gotoequipeslist() {
    this.router.navigate(['/equipe']);
  }

}
