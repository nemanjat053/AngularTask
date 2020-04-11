import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paket } from '../model/Paket';

@Injectable({
  providedIn: 'root'
})
export class PaketServiceService {
  
  private url = "http://localhost:3000/";
  private paketPrefix = 'paket';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Paket[]>{
    return this.http.get<Paket[]>(this.url + this.paketPrefix);
  }

  getOne(): Observable<Paket>{
    return this.http.get<Paket>(this.url + this.paketPrefix);
  }

  delete(id: number): Observable<Paket>{
    return this.http.delete<Paket>(this.url + this.paketPrefix + `/${id}`)
  }
}
