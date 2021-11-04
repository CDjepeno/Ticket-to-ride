import { ITicket } from './../entities/Ticket';
import { IComment } from '../entities/Comment';
import { Ticket } from '../../infra/models/Ticket';
export interface ITicketRepository {
  
  saveTicket(Ticket: ITicket): Promise<string>
  updateTicket(ticket: ITicket, id: number): Promise<string>
  getDetailsOneTicket(idTicket: number): Promise<any>
  // getCommentForOneTicket(id: string): Promise<IComment>
}