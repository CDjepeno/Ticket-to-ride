import { Router } from 'express'
import { TicketController } from '../controller/TicketController'
import { authEmail } from '../middlewares/authEmail'

const ticketRoutes = Router()

ticketRoutes.post('/ticket',authEmail, TicketController.save)
ticketRoutes.put('/ticket/:id', TicketController.updateTicket)
ticketRoutes.get('/ticket/:id', TicketController.getTicket)

export default ticketRoutes
