import {ArtisteModel} from './artiste.model';
import {OrganisateurModel} from './organisateur.model';
import {TicketModel} from './ticket.model';

export class ConcertModel {
  id?: number;
  date?: string; // Utilise string pour les dates JSON (format ISO 8601)
  lieu?: string;
  capacity?: number;
  prix?: number;
  artiste?: ArtisteModel;
  organisateur?: OrganisateurModel;
  tickets?: TicketModel[];
}
