import { TicketBuilderRepository } from '../builder/TicketBuilderRepository';
import { InMemoryTicketRepository } from '../builder/InMemoryTicketRepository';


describe("Ticket UseCase test", () => {
  it("Should register a new ticket", () => {
    const userStub = new InMemoryTicketRepository();
    const ticket = TicketBuilderRepository.ticketStub();
    const result = userStub.saveTicket(ticket);

    expect(result).resolves.toEqual("ticket added");
  });

  // it("Should be return array of tickets", () => {
  //   const userStub = new InMemoryTicketRepository();
  //   const users = TicketBuilderRepository.usersStub();
    
  //   userStub.getUsers().then((result) => {
  //     expect(result).toBe(result);
  //   })
  // });
});