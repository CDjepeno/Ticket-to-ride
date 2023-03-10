import {
  addTicketInteractorForTest,
  getTicketInteractorForTest,
  updateTicketInteractorForTest,
} from "../builder/adapters/ticketAdapter";
import { TicketBuilderRepository } from "../builder/ticket/TicketBuilderRepository";

describe("Ticket UseCase test", () => {
  it("Should register a new ticket", async () => {
    const ticket = TicketBuilderRepository.ticketStub();
    const result = await addTicketInteractorForTest.execute(ticket);

    expect(result).toBe("ticket added");
  });

  it("Should be update ticket", async () => {
    const ticketStub = TicketBuilderRepository.ticketStub();
    
    const result = await updateTicketInteractorForTest.execute(
      ticketStub,
      ticketStub.id
    );


    expect(result).toBe("ticket updated");
  });

  it("Should get a ticket", async () => {
    const ticketStub = TicketBuilderRepository.ticketStub();

    const result = await getTicketInteractorForTest.execute(ticketStub.id);

    expect(result.ticket).toMatchObject(ticketStub);
  });
});
