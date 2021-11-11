import { AddTicketRequest } from "./AddTicketRequest";
import { AddTicketResponse } from "./AddTicketResponse";
import { Ticket } from "../../../../entities/Ticket";
import { ITicketRepository } from "../../../../repository/ITicketRepository";

export class AddTicket {
  constructor(private repository: ITicketRepository) {}

  async execute(request: AddTicketRequest): Promise<any> {
    try {
      const response = new AddTicketResponse();
      const ticket = new Ticket(
        request.title,
        request.description,
        request.status,
        request.userId
      );
      return await this.repository.saveTicket(ticket).then((res) => {
        if (res.length > 0) {
          return res;
        } else {
          response.ticket = "ticket added";
          return response;
        }
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}
