import { Router } from 'express'
import { TicketController } from '../controller/TicketController'

const ticketRoutes = Router()

ticketRoutes.post('/ticket', TicketController.save)
ticketRoutes.put('/ticket/:id', TicketController.updateTicket)

export default ticketRoutes
