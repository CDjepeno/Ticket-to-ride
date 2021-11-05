import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Ticket } from '../models/Ticket';
import { User } from '../models/User';


export const ownerTicket = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader) {
    const message = "You don't give an email in header";
    return response.status(403).json({ message });
  }

  const email = authorizationHeader.split(" ")[1];
  const idTicket = request.params.id;

  const ticket = await getRepository(Ticket).findOne(idTicket);
  const user = await getRepository(User).findOne({ where: { email: email } });

  if (!ticket || !user) {
    const message = "ticket or user not found";
    return response.status(404).json({ message });
  }

  if (ticket.userId !== user.id) {
    const message = "You are not owner for this ticket";
    return response.status(403).json({ message }); 
  } else {
    next();
  }
};