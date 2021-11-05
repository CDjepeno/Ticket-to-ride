import { UpdateTicketRequest } from './UpdateTicketRequest';
import { UpdateTicketResponse } from './UpdateTicketResponse';
import { Ticket } from '../../../../entities/Ticket';
import { ITicketRepository } from '../../../../repository/ITicketRepository';

export class UpdateTicket {
  constructor(private repository: ITicketRepository){}

  async execute(request: UpdateTicketRequest, id: number) {
      const response = new UpdateTicketResponse();
      const oldTicket = await this.repository.getDetailsOneTicket(id)
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