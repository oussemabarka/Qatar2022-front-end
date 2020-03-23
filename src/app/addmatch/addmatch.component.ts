import { Component, OnInit } from '@angular/core';
import { Matche } from '../model/matche';
import { ActivatedRoute, Router } from '@angular/router';
import { MatcheService } from '../service/matche.service';

@Component({
  selector: 'app-addmatch',
  templateUrl: './addmatch.component.html',
  styleUrls: ['./addmatch.component.css']
})
export class AddmatchComponent  {

  matche: Matche ;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matcheservice: MatcheService
  ) {
    this.matche = new Matche();
  }
  onSubmit() {
    this.matcheservice.addmatch(this.matche).subscribe(result => this.gotoequipeslist() + JSON.stringify(this.matche, null, 4));
  }
  gotoequipeslist() {
    this.router.navigate(['/match']);
  }


}
