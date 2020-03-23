import { Component, OnInit } from '@angular/core';
import { Arbitres } from '../model/arbitres';
import { ActivatedRoute, Router } from '@angular/router';
import { ArbitresService } from '../service/arbitres.service';
@Component({
  selector: 'app-addarbitre',
  templateUrl: './addarbitre.component.html',
  styleUrls: ['./addarbitre.component.css']
})
export class AddarbitreComponent  {
arbitre: Arbitres;
constructor(
  private route: ActivatedRoute,
  private router: Router,
  private arbitreservice: ArbitresService
) {
  this.arbitre = new Arbitres();
}



  onSubmit() {
    this.arbitreservice.addarbitre(this.arbitre).subscribe(result => this.gotoequipeslist() + JSON.stringify(this.arbitre, null, 4));
  }
  gotoequipeslist() {
    this.router.navigate(['/arbitre']);
  }



}
