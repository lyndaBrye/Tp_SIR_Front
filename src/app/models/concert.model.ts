import {ArtisteModel} from './artiste.model';
import {OrganisateurModel} from './organisateur.model';
import {TicketModel} from './ticket.model';

export class ConcertModel {
  id?: number;
  //date au format YYYY-MM-DD'T'HH:mm:ss
  date?: string;
  lieu?: string;
  capacity?: number;
  prix?: number;
  imageUrl?: string;
  libelle?: string;
  artiste?: ArtisteModel;
  organisateur?: OrganisateurModel;
  tickets?: TicketModel[];

  constructor(
    id?: number,
    date?: string,
    lieu?: string,
    capacity?: number,
    prix?: number,
    imageUrl?: string,
    libelle?: string,
    artiste?: ArtisteModel,
    organisateur?: OrganisateurModel,
    tickets?: TicketModel[]
  ) {
    this.id = id;
    this.date = date;
    this.lieu = lieu;
    this.capacity = capacity;
    this.prix = prix;
    this.imageUrl = imageUrl;
    this.libelle = libelle;
    this.artiste = artiste;
    this.organisateur = organisateur;
    this.tickets = tickets;
  }
}
