import { Component, OnInit } from '@angular/core';
import { ArbitresService } from '../service/arbitres.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Arbitres } from '../model/arbitres';
@Component({
  selector: 'app-deletearbitres',
  templateUrl: './deletearbitres.component.html',
  styleUrls: ['./deletearbitres.component.css']
})
export class DeletearbitresComponent implements OnInit {
arbitre: Arbitres ;
constructor(
  private route: ActivatedRoute,
  private router: Router,
  private arbitreservice: ArbitresService
) {
  this.arbitre = new Arbitres();
}

  ngOnInit() {
  }
  deleteArbitre() {
    this.arbitreservice.delete(this.arbitre.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/arbitre']);
        },
        error => {
          console.log(error);
        });
  }

}
