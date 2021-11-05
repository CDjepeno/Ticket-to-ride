import { Router } from 'express'
import { TicketController } from '../controller/TicketController'
import { authEmail } from '../middlewares/authEmail'
import { ownerTicket } from '../middlewares/ownerTicket'

const ticketRoutes = Router()

ticketRoutes.post('/ticket',authEmail, TicketController.save)
ticketRoutes.put('/ticket/:id',ownerTicket, TicketController.updateTicket)
ticketRoutes.get('/ticket/:id', TicketController.getTicket)

export default ticketRoutes
