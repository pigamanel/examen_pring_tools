import { Livre } from './livre.model';
import { Utilisateur } from './utilisateur.model';

export class Emprunt {
  id: number;
  livre: Livre;
  utilisateur: Utilisateur;
  dateEmprunt: Date;
  dateRetour?: Date; // Optionnelle

  constructor(id: number, livre: Livre, utilisateur: Utilisateur, dateEmprunt: Date, dateRetour?: Date) {
    this.id = id;
    this.livre = livre;
    this.utilisateur = utilisateur;
    this.dateEmprunt = dateEmprunt;
    this.dateRetour = dateRetour;
  }
}
