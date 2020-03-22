import { Component, OnInit } from '@angular/core';
import { Arbitres } from '../model/arbitres';
import { ArbitresService } from '../service/arbitres.service';

@Component({
  selector: 'app-arbitres',
  templateUrl: './arbitres.component.html',
  styleUrls: ['./arbitres.component.css']
})
export class ArbitresComponent implements OnInit {
  arbitre: Arbitres[];
  constructor(private arbitreservice: ArbitresService) { }

  ngOnInit() {
this.arbitreservice.getlistarbitres().subscribe(data => {
this.arbitre = data;

});



  }
}
