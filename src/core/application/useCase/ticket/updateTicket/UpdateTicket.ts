import { UpdateTicketRequest } from "./UpdateTicketRequest";
import { UpdateTicketResponse } from "./UpdateTicketResponse";
import { Ticket } from "../../../../entities/Ticket";
import { ITicketRepository } from "../../../../repository/ITicketRepository";

export class UpdateTicket {
  constructor(private repository: ITicketRepository) {}

  async execute(request: UpdateTicketRequest, id: number) {
      const response = new UpdateTicketResponse();
      const oldTicket = await this.repository.getDetailsOneTicket(id);

      if (oldTicket === undefined) {
        response.ticketUnknown = true;

        return response;
      }

      const newTicket = new Ticket(
        request.title,
        request.description,
        request.status,
        request.userId
      );

      return this.repository.updateTicket(newTicket, id).then(res => {
        if (res.length > 0) {
          return res
        } 
        response.ticket = "ticket updated";
        return response
      })
  }
}
