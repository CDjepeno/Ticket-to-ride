import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Comment } from '../models/Comment';
import { User } from '../models/User';
import { validateEmail } from '../utils/validateEmail';


export const ownerComment = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader) {
    const message = "You don't give an email in header";
    return response.status(401).json({ message });
  }

  const email = authorizationHeader.split(" ")[1];

  if(!validateEmail(email)) {
    const message = "your email is invalid";
    return response.status(403).json({ message });
  }

  const idTicket = request.params.id;

  const comment = await getRepository(Comment).findOne(idTicket);
  const user = await getRepository(User).findOne({ where: { email: email } });

  if(!comment || !user) {
    const message = "comment or user not found";
    return response.status(404).json({ message })
  }

  if (comment.userId !== user.id) {
    const message = "You are not owner for this comment";
    return response.status(403).json({ message });
  } else {
    next();
  }
};