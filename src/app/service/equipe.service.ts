import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipes } from '../model/equipes';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
private baseURL: string;
  constructor(private http: HttpClient) {
    this.baseURL = 'http://localhost:8090/api';
   }
   public getlistequipe(): Observable<Equipes[]> {
return this.http.get<[Equipes]>('//localhost:8090/api/getequipes');

   }
   public addequipe(equipes: Equipes) {
    return this.http.post('//localhost:8090/api/addequipes', equipes);
       }
}
