import {NextFunction, Request, Response} from "express";
import { addUserInteractor, getUsersInteractor } from "../providers/adapters/userAdapter";

export class UserController {    
  
  static save = async(request: Request, response: Response, next: NextFunction) => {
      try {
          const user = request.body
          const result = await addUserInteractor.execute(user)
          return response.status(201).json(result)
      } catch (err) {
          return response.status(500).send(err)
      }
  }
  
  static getUsers = async(request: Request, response: Response, next: NextFunction) => {
      try {
          const users = await getUsersInteractor.execute()
          return response.status(200).json(users)
      } catch (err) {
          return response.status(500).send(err)
      }
  }
  
  
}