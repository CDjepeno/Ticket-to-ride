import { AddTicket } from '../../../src/core/application/useCase/ticket/addTicket/AddTicket';
import { GetTicket } from '../../../src/core/application/useCase/ticket/getTicket/GetTicket';
import { UpdateTicket } from '../../../src/core/application/useCase/ticket/updateTicket/UpdateTicket';
import { InMemoryTicketRepository } from '../ticket/InMemoryTicketRepository';


const ticketRepository = new InMemoryTicketRepository();

const addTicketInteractorForTest = new AddTicket(ticketRepository);
const updateTicketInteractorForTest = new UpdateTicket(ticketRepository);
const getTicketInteractorForTest = new GetTicket(ticketRepository);

export { addTicketInteractorForTest,updateTicketInteractorForTest, getTicketInteractorForTest }; 