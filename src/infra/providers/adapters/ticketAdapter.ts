import { AddTicket } from "../../../core/application/useCase/ticket/addTicket/AddTicket";
import { TicketProvider } from "../TicketProvider";

const userRepository = new TicketProvider();

const addTicketInteractor = new AddTicket(userRepository);

export { addTicketInteractor };