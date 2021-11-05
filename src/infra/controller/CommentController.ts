import {NextFunction, Request, Response} from "express";
import { addCommentInteractor } from "../providers/adapters/commentAdapter";
import { CommentProvider } from '../providers/CommentProvider';

export class CommentController {    
  
  static save = async(request: Request, response: Response, next: NextFunction) => {
      try {
          const comment = request.body
          await addCommentInteractor.execute(comment)
          return response.status(201).json('comment added')
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
  
  
}