import { Router } from 'express'
import { CommentController } from '../controller/CommentController'
import { ownerComment } from '../middlewares/ownerComment'

const commentRoutes = Router()

commentRoutes.get('/ticket/:id/comments', CommentController.getCommentsForOneTicket)
commentRoutes.delete('/comments/:id',ownerComment, CommentController.delete)
commentRoutes.post('/comments', CommentController.save)
commentRoutes.put('/comments/:id',ownerComment, CommentController.update)

export default commentRoutes
