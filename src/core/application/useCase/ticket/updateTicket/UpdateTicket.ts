import { AddTicketRequest } from "./UpdateTicketRequest";
import { AddTicketResponse } from './UpdateTicketResponse';
import { Ticket } from '../../../../entities/Ticket';
import { ITicketRepository } from '../../../../repository/ITicketRepository';

export class UpdateTicket {
  constructor(private repository: ITicketRepository, id: number){}

  async execute(request: AddTicketRequest, id: number) {
      const response = new AddTicketResponse();
      const oldTicket = this.repository.getDetailsOneTicket(id)
      let hasError = false;

      if (oldTicket === undefined) {
        hasError = true;
        response.ticketUnknown = true;

        return response
      }

      if(!hasError) {
        
        const newTicket = new Ticket(request.title, request.description,request.status,request.userId)

        await this.repository.updateTicket(newTicket, id)

        return newTicket
      }
      
      
      // const ticket = new Ticket(request.title, request.description,request.status,request.userId)
      // console.log('core',ticket)
      // await this.repository.saveTicket(ticket)

  }

}