import { Injectable } from '@angular/core';
import { Arbitres } from '../model/arbitres';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArbitresService {
  private baseURL: string;
  constructor(private http: HttpClient) {
    this.baseURL = 'http://localhost:8090/api';
   }
   public getlistarbitres(): Observable<Arbitres[]> {
return this.http.get<[Arbitres]>('//localhost:8090/api/getarbitres');

   }
}
