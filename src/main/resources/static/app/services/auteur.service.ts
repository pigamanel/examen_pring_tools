import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auteur } from '../models/auteur.model';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {
  private baseUrl = 'http://localhost:4000/api/auteurs'; // URL de votre API backend

  constructor(private http: HttpClient) { }

  getAuteurs(): Observable<Auteur[]> {
    return this.http.get<Auteur[]>(`${this.baseUrl}`);
  }

  getAuteur(id: number): Observable<Auteur> {
    return this.http.get<Auteur>(`${this.baseUrl}/${id}`);
  }

  addAuteur(auteur: Auteur): Observable<Auteur> {
    return this.http.post<Auteur>(`${this.baseUrl}`, auteur);
  }

  updateAuteur(id: number, auteur: Auteur): Observable<Auteur> {
    return this.http.put<Auteur>(`${this.baseUrl}/${id}`, auteur);
  }

  deleteAuteur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
