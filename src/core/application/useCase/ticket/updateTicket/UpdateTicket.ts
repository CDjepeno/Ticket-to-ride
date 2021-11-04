import { AddTicketRequest } from "./UpdateTicketRequest";
import { AddTicketResponse } from './UpdateTicketResponse';
import { Ticket } from '../../../../entities/Ticket';
import { ITicketRepository } from '../../../../repository/ITicketRepository';

export class UpdateTicket {
  constructor(private repository: ITicketRepository){}

  async execute(request: AddTicketRequest, id: number) {
      const response = new AddTicketResponse();
      const oldTicket = await this.repository.getOneTicket(id)
      let hasError = false;
     
      if (oldTicket === undefined) {
        hasError = true;
        response.ticketUnknown = true;

        return response
      }


        
        const newTicket = new Ticket(request.title, request.description,request.status,request.userId)
        // console.log(newTicket, id)

        await this.repository.updateTicket(newTicket, id)
        return newTicket
    

  }

}