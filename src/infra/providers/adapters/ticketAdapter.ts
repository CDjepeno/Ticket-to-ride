import { AddTicket } from "../../../core-domain/application/useCase/ticket/addTicket/AddTicket";
import { GetTicket } from "../../../core-domain/application/useCase/ticket/getTicket/GetTicket";
import { UpdateTicket } from "../../../core-domain/application/useCase/ticket/updateTicket/UpdateTicket";
import { TicketProvider } from "../TicketProvider";

const ticketRepository = new TicketProvider();

const addTicketInteractor = new AddTicket(ticketRepository);
const updateTicketInteractor = new UpdateTicket(ticketRepository);
const getTicketInteractor = new GetTicket(ticketRepository);

export { addTicketInteractor,updateTicketInteractor, getTicketInteractor }; 