import { Router } from 'express'
import { CommentController } from '../controller/CommentController'

const commentRoutes = Router()

commentRoutes.get('/ticket/:id/comments', CommentController.getCommentsForOneTicket)

export default commentRoutes
