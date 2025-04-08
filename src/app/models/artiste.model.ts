export class ArtisteModel {
  id?: number;
  nom: string;
  prenom: string;
  biographie: string;

  constructor(nom: string, prenom: string, biographie: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.biographie = biographie;
  }
}
