import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filme } from './Int_Filmes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  
  constructor( private injecaoD: HttpClient){}

  private readonly API = 'http://localhost:3000/filmes'

  metodoGet(): Observable<Filme[]> {
    return this.injecaoD.get<Filme[]>(this.API)
  }

  metodoGetID(ID: number): Observable<Filme> {
    return this.injecaoD.get<Filme>(this.API + '/' + ID);
  }

  metodoPost(Filmes:Filme): Observable<Filme>{
    return this.injecaoD.post<Filme>(this.API, Filmes)
  }

  metodoDel(ID: number): Observable<Filme>{
    return this.injecaoD.delete<Filme>(this.API + "/" + ID)
  }
  
}
