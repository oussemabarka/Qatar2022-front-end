import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joueurs } from '../model/joueurs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  private baseURL: string;
  private baseUrl: string;
 constructor(private http: HttpClient) {
    this.baseURL = 'http://localhost:8090/api';
    this.baseUrl = 'http://localhost:8090/api/deletejoueurs';

   }
   public getlistejoueur(): Observable<Joueurs[]> {
    return this.http.get<[Joueurs]>('//localhost:8090/api/getjoueurs');

       }
       public addjoueur(joueur: Joueurs) {
        return this.http.post('//localhost:8090/api/addjoueurs', joueur);
           }
          public delete(id) {
            return this.http.delete(`${this.baseUrl}/${id}`);
          }

  }
