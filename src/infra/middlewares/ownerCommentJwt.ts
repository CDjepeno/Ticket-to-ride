import { getRepository } from "typeorm";
import { Comment } from "../models/Comment";
import { User } from "../models/User";
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';


export const ownerCommentJwt = async (
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

    const ticket = await getRepository(Comment).findOne({ where: { userId: user.id } });

    
    if (!user) { 
      const message = "You do not access to this ressource";
      return response.status(403).json({ message });
    }

    if (ticket.userId !== user.id ) { 
      const message = "You are not the owner";
      return response.status(403).json({ message });
    } else {
      next();
    }
};