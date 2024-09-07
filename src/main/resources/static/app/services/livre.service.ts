import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from '../models/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private baseUrl = 'http://localhost:4000/api/livres'; // URL de votre API backend

  constructor(private http: HttpClient) { }

  getLivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(this.baseUrl);
  }

  getLivreById(id: number): Observable<Livre> {
    return this.http.get<Livre>(`${this.baseUrl}/${id}`);
  }

  addLivre(livre: Livre): Observable<Livre> {
    return this.http.post<Livre>(this.baseUrl, livre);
  }

  updateLivre(id: number, livre: Livre): Observable<Livre> {
    return this.http.put<Livre>(`${this.baseUrl}/${id}`, livre);
  }

  deleteLivre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
