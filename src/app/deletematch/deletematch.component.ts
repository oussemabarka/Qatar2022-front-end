import { Component, OnInit } from '@angular/core';
import { Matche } from '../model/matche';
import { ActivatedRoute, Router } from '@angular/router';
import { MatcheService } from '../service/matche.service';

@Component({
  selector: 'app-deletematch',
  templateUrl: './deletematch.component.html',
  styleUrls: ['./deletematch.component.css']
})
export class DeletematchComponent  {


  matche: Matche ;
constructor(
  private route: ActivatedRoute,
  private router: Router,
  private matcheservice: MatcheService
) {
  this.matche = new Matche();
}
deleteMatch() {
  this.matcheservice.delete(this.matche.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/match']);
      },
      error => {
        console.log(error);
      });
}



}
