import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operater } from '../model/Operater';

@Injectable({
  providedIn: 'root',
})
export class OperaterServiceService {
  constructor(private http: HttpClient) {}

  private url: string = 'http://localhost:3000/';

  private operatorPrefix = 'operater';

  getAll(): Observable<Operater[]> {
    return this.http.get<Operater[]>(this.url + this.operatorPrefix);
  }

  getOne(id: number): Observable<Operater> {
    return this.http.get<Operater>(this.url + this.operatorPrefix + `/${id}`);
  }

  delete(id: number): Observable<Operater> {
    return this.http.delete<Operater>(
      this.url + this.operatorPrefix + `/${id}`
    );
  }

  update(id: number, operater: Operater): Observable<Operater> {
    return this.http.put<Operater>(
      this.url + this.operatorPrefix + `/${id}`,
      operater
    );
  }
}
