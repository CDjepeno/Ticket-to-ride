import {NextFunction, Request, Response} from "express";
import { addUserInteractor, getUsersInteractor } from "../providers/adapters/userAdapter";
import { CommentProvider } from '../providers/CommentProvider';

export class CommentController {    
  
//   static save = async(request: Request, response: Response, next: NextFunction) => {
//       try {
//           const user = request.body
//           await addUserInteractor.execute(user)
//           return response.status(201).json('Welcome')
//       } catch (err) {
//           return response.status(500).send(err)
//       }
//   }
  
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