export class Auteur {
  id: number;
  nom: string;
  dateNaissance: string;
  nationalite: string;

  constructor(id: number, nom: string, dateNaissance: string, nationalite: string) {
    this.id = id;
    this.nom = nom;
    this.dateNaissance = dateNaissance;
    this.nationalite = nationalite;
  }
}
