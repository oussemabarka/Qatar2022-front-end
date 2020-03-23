import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matche } from '../model/matche';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatcheService {

  private baseURL: string;
  private baseUrl: string;
 constructor(private http: HttpClient) {
    this.baseURL = 'http://localhost:8090/api';
    this.baseUrl = 'http://localhost:8090/api/deletematch';

   }
   public getlistematch(): Observable<Matche[]> {
    return this.http.get<[Matche]>('//localhost:8090/api/getmatchs');

       }
       public addmatch(joueur: Matche) {
        return this.http.post('//localhost:8090/api/addmatchs', joueur);
           }
          public delete(id) {
            return this.http.delete(`${this.baseUrl}/${id}`);
          }


}
