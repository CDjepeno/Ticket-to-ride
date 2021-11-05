import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';
import { validateEmail } from '../utils/validateEmail';


export const authLogin = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const email = request.body.email;

  if(!validateEmail(email)) {
    const message = "email incorrect please send good email auth_login";
    return response.status(400).send({ message });
  }

  const user = await getRepository(User).findOne({ where: { email: email } });

  if(!user) {
    const message = "You are not registed, please register";
    return response.status(403).json({ message });
  }

  next();
};
