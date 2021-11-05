import { GetTicketResponse } from "./GetTicketResponse";
import { ITicketRepository } from "../../../../repository/ITicketRepository";

export class GetTicket {
  constructor(private repository: ITicketRepository) {}

  async execute(id: number) {
    try {
      const response = new GetTicketResponse();
      response.ticket = await this.repository.getDetailsOneTicket(id);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }
}
