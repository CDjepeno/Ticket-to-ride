import { AddTicket } from "../../../core/application/useCase/ticket/addTicket/AddTicket";
import { UpdateTicket } from "../../../core/application/useCase/ticket/updateTicket/UpdateTicket";
import { TicketProvider } from "../TicketProvider";

const ticketRepository = new TicketProvider();

const addTicketInteractor = new AddTicket(ticketRepository);
const updateTicketInteractor = new UpdateTicket(ticketRepository);

export { addTicketInteractor,updateTicketInteractor };