import { Router } from 'express'
import { CommentController } from '../controller/CommentController'

const commentRoutes = Router()

commentRoutes.get('/ticket/:id/comments', CommentController.getCommentsForOneTicket)
commentRoutes.delete('/comments/:id', CommentController.delete)
commentRoutes.post('/comments', CommentController.save)
commentRoutes.put('/comments/:id', CommentController.update)

export default commentRoutes
