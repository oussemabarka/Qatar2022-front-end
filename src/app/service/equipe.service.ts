import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipes } from '../model/equipes';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
private baseURL: string;
private baseUrl: string;
private baseUrl1: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'http://localhost:8090/api';
    this.baseUrl = 'http://localhost:8090/api/deleteequipe';
    this.baseUrl1 = 'http://localhost:8090/api/getequipes';
   }
   public getlistequipe(): Observable<Equipes[]> {
return this.http.get<[Equipes]>('//localhost:8090/api/getequipes');

   }
   public addequipe(equipes: Equipes) {
    return this.http.post('//localhost:8090/api/addequipes', equipes);
       }
      public delete(id) {
        return this.http.delete(`${this.baseUrl}/${id}`);
      }

     public getbyid(id) {
        return this.http.get(`${this.baseUrl1}/${id}`);
      }
     /* public getAllUsers(): Observable<Equipes[]> {
        return this.http.get<Equipes[]>(`//localhost:8090/api/getequipes`).pipe(
          map(data => data.map(data => new Equipes().deserialize(data)))

          );

      }*/

    }
