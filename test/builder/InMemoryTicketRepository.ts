import { ITicket } from "./../../src/core/entities/Ticket";
import { ITicketRepository } from "../../src/core/repository/ITicketRepository";
import { TicketBuilderRepository } from "./TicketBuilderRepository";
export class InMemoryTicketRepository implements ITicketRepository {
  private tickets: Map<number, ITicket>;

  constructor() {
    this.tickets = new Map();
  }

  async saveTicket(ticket: ITicket): Promise<string> {
    if (this.tickets.get(ticket.id)) {
      this.tickets.delete(ticket.id);
    }
    this.tickets.set(ticket.id, ticket);
    return Promise.resolve("ticket added");
  }

  updateTicket(ticket: ITicket, id: number): Promise<string> {
    const result = TicketBuilderRepository.usersStub();
    return Promise.resolve("ticket updated");
  }

  getDetailsOneTicket(id: number): Promise<ITicket> {
    return Promise.resolve(this.tickets.get(id))
  }
  
  getOneTicket(id: number): Promise<ITicket> {
    return Promise.resolve(this.tickets.get(id))
  }
}
