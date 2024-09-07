import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auteur } from '../models/auteur.model';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {
  private baseUrl = 'http://localhost:8080/api/auteurs';

  constructor(private http: HttpClient) { }

  // Récupère la liste de tous les auteurs
  getAuteurs(): Observable<Auteur[]> {
    return this.http.get<Auteur[]>(`${this.baseUrl}/ListeAuteur`);
  }

  // Récupère un auteur spécifique par son ID
  getAuteur(id: number): Observable<Auteur> {
    return this.http.get<Auteur>(`${this.baseUrl}/ListeAuteur/${id}`);
  }

  // Ajoute un nouvel auteur
  addAuteur(auteur: Auteur): Observable<Auteur> {
    return this.http.post<Auteur>(`${this.baseUrl}/AddAuteur`, auteur);
  }

  // Met à jour un auteur existant
  updateAuteur(id: number, auteur: Auteur): Observable<Auteur> {
    return this.http.put<Auteur>(`${this.baseUrl}/ModifierAuteur/${id}`, auteur);
  }

  // Supprime un auteur par son ID
  deleteAuteur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/SupAuteur/${id}`);
  }
}
