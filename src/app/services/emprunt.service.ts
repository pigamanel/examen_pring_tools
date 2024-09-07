import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emprunt } from '../models/emprunt.model';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {
  private baseUrl = 'http://localhost:8080/api/emprunts';

  constructor(private http: HttpClient) { }

  // Obtenir la liste des emprunts
  getEmprunts(): Observable<Emprunt[]> {
    return this.http.get<Emprunt[]>(`${this.baseUrl}/ListeEmprunt`);
  }

  // Obtenir un emprunt par son ID
  getEmprunt(id: number): Observable<Emprunt> {
    return this.http.get<Emprunt>(`${this.baseUrl}/recupere/${id}`);
  }

  // Ajouter un nouvel emprunt
  addEmprunt(emprunt: Emprunt): Observable<Emprunt> {
    return this.http.post<Emprunt>(`${this.baseUrl}/addemprunt`, emprunt);
  }

  // Mettre à jour un emprunt existant
  updateEmprunt(id: number, emprunt: Emprunt): Observable<Emprunt> {
    return this.http.put<Emprunt>(`${this.baseUrl}/updateEmprunt/${id}`, emprunt);
  }

  // Supprimer un emprunt par son ID
  deleteEmprunt(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/suprimer/${id}`);
  }

  // Mettre à jour la date de retour d'un emprunt
  returnEmprunt(id: number, dateRetour: Date): Observable<Emprunt> {
    // Créez un objet partiel avec uniquement dateRetour
    const updatePayload = { dateRetour };
    return this.http.patch<Emprunt>(`${this.baseUrl}/updateDateRetour/${id}`, updatePayload);
  }
}
