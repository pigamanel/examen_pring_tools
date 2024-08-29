export class Utilisateur {
  id: number;
  nom: string;
  prenom: string; // Correction du typographique
  age: string;

  constructor(id: number, nom: string, prenom: string, age: string) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }
}
