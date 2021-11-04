import {NextFunction, Request, Response} from "express";
import { getRepository } from "typeorm";
import { Ticket } from "../models/Ticket";
import { addTicketInteractor } from "../providers/adapters/ticketAdapter";

export class TicketController {    
  
  static save = async(request: Request, response: Response, next: NextFunction) => {
      try {
          const ticket = request.body

          await addTicketInteractor.execute(ticket)

          return response.status(201).json('ticket added')
      } catch (err) {
          return response.status(500).send(err)
      }
  }

  static updateTicket = async(request: Request, response: Response, next: NextFunction) => {
      try {
          const id = request.body

          await addTicketInteractor.execute(id)

          return response.status(201).json('ticket added')
      } catch (err) {
          return response.status(500).send(err)
      }
  }
  
}