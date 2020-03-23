import { Component, OnInit } from '@angular/core';
import { Matche } from '../model/matche';
import { MatcheService } from '../service/matche.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit {
  matche: Matche[];

    constructor(private matcheservice: MatcheService) { }


    ngOnInit() {
      this.matcheservice.getlistematch().subscribe(data => {
      this.matche = data;

      });
  }

}
