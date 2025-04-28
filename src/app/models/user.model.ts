import {TicketModel} from './ticket.model';

export type Sexe = 'HOMME' | 'FEMME' | 'AUTRE'; // Enum en TypeScript

export interface UserModel {
  id?: number;
  nom: string;
  prenom: string;
  codePostal: string;
  email: string;
  tel: string;
  password: string;
  sexe: Sexe;
  tickets?: TicketModel[];
}
