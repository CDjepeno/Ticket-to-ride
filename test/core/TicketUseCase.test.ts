import { TicketBuilderRepository } from '../builder/TicketBuilderRepository';
import { InMemoryTicketRepository } from '../builder/InMemoryTicketRepository';


describe("Ticket UseCase test", () => {
  it("Should register a new ticket", () => {
    const userStub = new InMemoryTicketRepository();
    const ticket = TicketBuilderRepository.ticketStub();
    const result = userStub.saveTicket(ticket);

    expect(result).resolves.toEqual("ticket added");
  });

  it("Should be update ticket", () => {
    const ticketInMemory = new InMemoryTicketRepository();
    const ticketStub = TicketBuilderRepository.ticketStub();
    const result = ticketInMemory.updateTicket(ticketStub, ticketStub.id)
  
    expect(result).resolves.toEqual("ticket updated");
    
  });
});