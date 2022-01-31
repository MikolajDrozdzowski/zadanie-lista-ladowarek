import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ChargersService {
  private apiUrl = 'http://localhost:5000/content';
  // private apiUrl = '/api/charge-points';
  constructor(
    private http: HttpClient
  ) { }

  getChargers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteCharger(charger: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${charger.id}`);
  }

  addCharger(charger: any): Observable<any>  {
    return this.http.post(this.apiUrl, charger, httpOptions)
  }

  updateCharger(charger: any): Observable<any>  {
    return this.http.put(`${this.apiUrl}/${charger.id}`, charger, httpOptions)
  }
}
