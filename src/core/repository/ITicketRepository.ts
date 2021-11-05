import { ITicket } from './../entities/Ticket';
export interface ITicketRepository {
  
  saveTicket(Ticket: ITicket): Promise<string>
  updateTicket(ticket: ITicket, id: number): Promise<string>
  getDetailsOneTicket(idTicket: number): Promise<any>
  getOneTicket(id: number)
}