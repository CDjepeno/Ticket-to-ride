import { ValidationError } from 'class-validator';
import { ITicket } from '../entities/Ticket';
export interface ITicketRepository {
  
  saveTicket(Ticket: ITicket): Promise<string|ValidationError[]>
  updateTicket(ticket: ITicket, id: number): Promise<string>
  getDetailsOneTicket(idTicket: number): Promise<any>|ITicket
  getOneTicket(id: number)
}