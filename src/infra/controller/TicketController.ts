import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Ticket } from "../models/Ticket";
import {
  addTicketInteractor,
  getTicketInteractor,
  updateTicketInteractor,
} from "../providers/adapters/ticketAdapter";

export class TicketController {
  static save = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const ticket = request.body;

      const result = await addTicketInteractor.execute(ticket);

      return response.status(201).json(result);
    } catch (err) {
      return response.status(500).send(err);
    }
  };

  static updateTicket = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const newTicket = request.body;
      const id = +request.params.id;

      const result = await updateTicketInteractor.execute(newTicket, id);

      return response.status(200).json(result);
    } catch (err) {
      return response.status(500).send(err);
    }
  };

  static getTicket = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const id = +request.params.id;

      const ticket = await getTicketInteractor.execute(id);

      return response.status(200).json({ ticket });
    } catch (err) {
      return response.status(500).send(err);
    }
  };
}
