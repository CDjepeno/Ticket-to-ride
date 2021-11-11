import { ITicket, Status } from "../../../src/core/entities/Ticket";
import { ITicketRepository } from "../../../src/core/repository/ITicketRepository";
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
    const ticketStub = TicketBuilderRepository.ticketStub();
    this.saveTicket(ticketStub)
   
      ticket.title = "derzqarer",
      ticket.description = "derzqarer",
      ticket.status = Status.DONE,
    
    this.tickets.set(id, ticket)
    return Promise.resolve("ticket updated");
  }

  getDetailsOneTicket(id: number): Promise<ITicket> | ITicket {
    const ticketStub = TicketBuilderRepository.ticketStub();
    this.saveTicket(ticketStub)
    return this.tickets.get(id)
  }
  
  getOneTicket(id: number): Promise<ITicket> {
    return Promise.resolve(this.tickets.get(id))
  }
}
