import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { Ticket } from '../models/Ticket';
import { User } from '../models/User';


export const ownerTicketJwt = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader) {
    const message = "You don't give a token in header";
    return response.status(403).json({ message });
  }
  const token = authorizationHeader.split(" ")[1];

  const decodedToken: any = jwt.verify(
    token,
    process.env.TOKEN_SECRET,
    (err, decodedToken) => {
      if (err) {
        const message =
          "You do not access to this ressource";
        return response.status(403).json({ message });
      }
      return decodedToken
    }
  );

  if(typeof decodedToken.iat !== "number") {
    return response.status(403);
  } 

    const user = await getRepository(User).findOne({ where: { email: decodedToken.email } });

    const ticket = await getRepository(Ticket).findOne({ where: { userId: user.id } });
    
    if (!user) { 
      const message = "You do not access to this ressource";
      return response.status(403).json({ message });
    }

    if (ticket.userId !== request.body.userId ) { 
      const message = "You are not the owner";
      return response.status(403).json({ message });
    } else {
      next();
    }
};