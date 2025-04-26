import {UserModel} from './user.model';

export interface TicketModel {
  id?: number;
  concertId: number;
  userId?: number;
}
