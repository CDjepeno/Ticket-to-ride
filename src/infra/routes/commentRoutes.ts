import { Router } from 'express'
import { CommentController } from '../controller/CommentController'
import { TicketController } from '../controller/TicketController'

const commentRoutes = Router()

commentRoutes.get('/ticket/:id/comments', CommentController.getCommentsForOneTicket)

export default commentRoutes
