import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emprunt } from '../models/emprunt.model';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {
  private baseUrl = 'http://localhost:4000/api/emprunts'; // URL de votre API backend

  constructor(private http: HttpClient) { }

  // Obtenir la liste des emprunts
  getEmprunts(): Observable<Emprunt[]> {
    return this.http.get<Emprunt[]>(this.baseUrl);
  }

  // Obtenir un emprunt par son ID
  getEmprunt(id: number): Observable<Emprunt> {
    return this.http.get<Emprunt>(`${this.baseUrl}/${id}`);
  }

  // Ajouter un nouvel emprunt
  addEmprunt(emprunt: Emprunt): Observable<Emprunt> {
    return this.http.post<Emprunt>(this.baseUrl, emprunt);
  }

  // Mettre à jour un emprunt existant
  updateEmprunt(id: number, emprunt: Emprunt): Observable<Emprunt> {
    return this.http.put<Emprunt>(`${this.baseUrl}/${id}`, emprunt);
  }

  // Supprimer un emprunt par son ID
  deleteEmprunt(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Retourner un emprunt
  returnEmprunt(id: number, dateRetour: string): Observable<Emprunt> {
    // Envoyer la date de retour au backend pour mettre à jour l'emprunt
    return this.http.patch<Emprunt>(`${this.baseUrl}/${id}/return`, { dateRetour });
  }
}
