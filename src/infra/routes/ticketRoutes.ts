import { Router } from 'express'
import { TicketController } from '../controller/TicketController'

const ticketRoutes = Router()

ticketRoutes.post('/ticket', TicketController.save)

export default ticketRoutes
