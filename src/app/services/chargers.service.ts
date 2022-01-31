import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Charger, Response } from '../Interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ChargersService {
  
  private apiUrl = '/api/charge-points';
  constructor(
    private http: HttpClient
  ) { }

  getChargers(): Observable<Response> {
    return this.http.get<Response>(this.apiUrl);
  }

  deleteCharger(charger: Charger): Observable<Charger> {
    return this.http.delete<Charger>(`${this.apiUrl}/${charger.id}`);
  }

  addCharger(charger: Charger): Observable<Charger>  {
    return this.http.post<Charger>(this.apiUrl, charger, httpOptions)
  }

  updateCharger(charger: Charger): Observable<Charger>  {
    return this.http.put<Charger>(`${this.apiUrl}/${charger.id}`, charger, httpOptions)
  }
}
