import { AddTicketRequest } from "./AddTicketRequest";
import { AddTicketResponse } from './AddTicketResponse';
import { Ticket } from '../../../../entities/Ticket';
import { ITicketRepository } from '../../../../repository/ITicketRepository';

export class AddTicket {
  constructor(private repository: ITicketRepository){}

  async execute(request: AddTicketRequest) {
    try {
      const response = new AddTicketResponse();
      const ticket = new Ticket(request.title, request.description,request.status,request.userId)
      response.ticket = await this.repository.saveTicket(ticket)

      return response
    } catch (err) {
      throw new Error(err)
    }
  }

}