import { ITicket } from './../entities/Ticket';
import { IComment } from '../entities/Comment';
export interface ITicketRepository {
  
  saveTicket(Ticket: ITicket): Promise<string>
  updateTicket(ticket: ITicket): Promise<string>
  getTicket(id: string): Promise<ITicket>
  // getCommentForOneTicket(id: string): Promise<IComment>
}