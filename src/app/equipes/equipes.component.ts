import { Component, OnInit } from '@angular/core';
import { Equipes } from '../model/equipes';
import { EquipeService } from '../service/equipe.service';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {
equipes: Equipes[];
  constructor(private equipeservice: EquipeService) { }

  ngOnInit() {
this.equipeservice.getlistequipe().subscribe(data => {
this.equipes = data;

});



  }}
