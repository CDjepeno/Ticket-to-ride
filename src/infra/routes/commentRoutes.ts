import { Router } from 'express'
import { CommentController } from '../controller/CommentController'
import { ownerCommentJwt } from '../middlewares/ownerCommentJwt'

const commentRoutes = Router()

commentRoutes.get('/ticket/:id/comments', CommentController.getCommentsForOneTicket)
commentRoutes.delete('/comments/:id',ownerCommentJwt, CommentController.delete)
commentRoutes.post('/comments', CommentController.save)
commentRoutes.put('/comments/:id',ownerCommentJwt, CommentController.update)

export default commentRoutes
