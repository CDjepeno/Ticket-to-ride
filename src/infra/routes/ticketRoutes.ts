import { Router } from 'express'
import { TicketController } from '../controller/TicketController'
import { authJwt } from '../middlewares/authJwt';
import { ownerTicketJwt } from '../middlewares/ownerTicketJwt';

const ticketRoutes = Router()

ticketRoutes.post('/ticket',authJwt, TicketController.save)
ticketRoutes.put('/ticket/:id',ownerTicketJwt, TicketController.updateTicket)
ticketRoutes.get('/ticket/:id', TicketController.getTicket)

export default ticketRoutes
