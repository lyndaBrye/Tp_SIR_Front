import {Sexe, UserModel} from './user.model';

export class OrganisateurModel implements UserModel{
  id?: number;
  nom: string;
  prenom: string;
  codePostal: string;
  email: string;
  tel: string;
  password: string;
  sexe: Sexe;
  compagnie: string;
  constructor(
    nom: string,
    prenom: string,
    codePostal: string,
    email: string,
    tel: string,
    password: string,
    sexe: Sexe,
    compagnie: string
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.codePostal = codePostal;
    this.email = email;
    this.tel = tel;
    this.password = password;
    this.sexe = sexe;
    this.compagnie = compagnie;
  }
}
