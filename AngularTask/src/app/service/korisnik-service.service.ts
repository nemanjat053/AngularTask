import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Korisnik } from '../model/Korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikServiceService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:3000/";

  private korisnikPrefix = 'korisnik';
  private operatorPrefix = 'operator';
  private paketPrefix = 'paket';


  getAll(): Observable<Korisnik[]>{
    return this.http.get<Korisnik[]>(this.url + this.korisnikPrefix)
  }

  getOne(id:number): Observable<Korisnik>{
    return this.http.get<Korisnik>(this.url + this.korisnikPrefix + '/' + id);
  }

  deleteOne(id:number): Observable<Korisnik>{
    return this.http.delete<Korisnik>(this.url + this.korisnikPrefix + '/' + id);
  }
}
