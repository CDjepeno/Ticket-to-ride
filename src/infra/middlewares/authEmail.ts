import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';
import { validateEmail } from '../utils/validateEmail';

export const authEmail = async (
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

  if(!validateEmail(email)) {
    const message = "your email is invalid";
    return response.status(403).json({ message });
  }

  const userRepository = getRepository(User);
  const users = await userRepository.find();
  const user = await users.find((user) => user.email === email);

  if (user === undefined) {
    const message = "You are not authorized for this action";
    return response.status(403).json({ message });
  } else {
    next();
  }
};
