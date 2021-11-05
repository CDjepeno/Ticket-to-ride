import * as dotenv from "dotenv";
import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from 'express';
import { getRepository } from "typeorm";
import { User } from "../models/User";


dotenv.config();

export class LoginController {
  static login = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const emailUser = request.body.email;

    const user = await getRepository(User).findOne({
      where: { email: emailUser },
    });
    if (!user) {
      return response.status(403).send("You are not register, please register");
    }
    const token = jwt.sign({ email: user.email }, process.env.TOKEN_SECRET, {
      expiresIn: "24h",
    });
    return response.status(200).send({token: token});
  };
}