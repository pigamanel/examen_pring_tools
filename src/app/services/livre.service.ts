import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from '../models/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private baseUrl = 'http://localhost:8080/api/livres';

  constructor(private http: HttpClient) { }

  getAllLivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(`${this.baseUrl}/listeLivre`);
  }

  getLivreById(id: number): Observable<Livre> {
    return this.http.get<Livre>(`${this.baseUrl}/${id}`);
  }

  addLivre(livre: Livre): Observable<Livre> {
    return this.http.post<Livre>(`${this.baseUrl}/addLivre`, livre);
  }

  updateLivre(id: number, livre: Livre): Observable<Livre> {
    return this.http.put<Livre>(`${this.baseUrl}/${id}/update`, livre);
  }

  deleteLivre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}/delete`);
  }
}
