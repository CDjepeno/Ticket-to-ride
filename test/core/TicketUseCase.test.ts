import { TicketBuilderRepository } from '../builder/TicketBuilderRepository';
import { InMemoryTicketRepository } from '../builder/InMemoryTicketRepository';
import { GetTicket } from '../../src/core/application/useCase/ticket/getTicket/GetTicket';


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

  it('Should get a ticket', () => {
    const ticketStub = TicketBuilderRepository.ticketStub();
    const ticketInMemory = new InMemoryTicketRepository();
    ticketInMemory.saveTicket(ticketStub)

    const result = ticketInMemory.getDetailsOneTicket(ticketStub.id)
    expect(result).resolves.toEqual(ticketStub)
})
});