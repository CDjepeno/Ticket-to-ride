import { Router } from 'express'
import { CommentController } from '../controller/CommentController'

const commentRoutes = Router()

commentRoutes.get('/ticket/:id/comments', CommentController.getCommentsForOneTicket)
commentRoutes.post('/comments', CommentController.save)

export default commentRoutes
