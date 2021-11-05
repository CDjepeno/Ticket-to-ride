import {NextFunction, Request, Response} from "express";
import { addCommentInteractor, deleteCommentInteractor } from "../providers/adapters/commentAdapter";
import { CommentProvider } from '../providers/CommentProvider';

export class CommentController {    
  
  static save = async(request: Request, response: Response, next: NextFunction) => {
      try {
          const comment = request.body
          const result = await addCommentInteractor.execute(comment)
          return response.status(201).json(result)
      } catch (err) {
          return response.status(500).send(err)
      }
  }
  
  static getCommentsForOneTicket = async(request: Request, response: Response, next: NextFunction) => {
      try {
          const provider = new CommentProvider()
          const id = +request.params.id

          const comments = await provider.getCommentForOneTicket(id)
          return response.status(200).json(comments)
      } catch (err) {
          return response.status(500).send(err)
      }
  }

  static delete = async(request: Request, response: Response, next: NextFunction) => {
    try {
        const idComment = +request.params.id
        const result = await deleteCommentInteractor.execute(idComment)
        return response.status(200).json(result)
    } catch (err) {
        return response.status(500).send(err)
    }
}
  
  
}