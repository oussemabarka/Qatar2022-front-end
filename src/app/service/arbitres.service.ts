import { Injectable } from '@angular/core';
import { Arbitres } from '../model/arbitres';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArbitresService {
  private baseURL: string;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'http://localhost:8090/api';
    this.baseUrl = 'http://localhost:8090/api/deletearbitre';
   }
   public getlistarbitres(): Observable<Arbitres[]> {
return this.http.get<[Arbitres]>('//localhost:8090/api/getarbitres');

   }
   public addarbitre(arbitre: Arbitres) {
    return this.http.post('//localhost:8090/api/addarbitre', arbitre);
       }
      public delete(id) {
        return this.http.delete(`${this.baseUrl}/${id}`);
      }

}
