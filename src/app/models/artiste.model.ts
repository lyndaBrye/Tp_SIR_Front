export class ArtisteModel {
  id?: number;
  nom: string;
  prenom: string;
  biographie: string;
  imageUrl?: string;

  constructor(nom: string, prenom: string, biographie: string, imageUrl?: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.biographie = biographie;
    this.imageUrl = imageUrl;
  }
}
