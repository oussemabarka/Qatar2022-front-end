import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../service/equipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipes } from '../model/equipes';
@Component({
  selector: 'app-deleteequipe',
  templateUrl: './deleteequipe.component.html',
  styleUrls: ['./deleteequipe.component.css']
})
export class DeleteequipeComponent implements OnInit {
  equipes: Equipes ;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private equipeservice: EquipeService
  ) {
    this.equipes = new Equipes();
  }

  ngOnInit() {

  }
  deleteTutorial() {
    this.equipeservice.delete(this.equipes.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/equipe']);
        },
        error => {
          console.log(error);
        });
  }

}
