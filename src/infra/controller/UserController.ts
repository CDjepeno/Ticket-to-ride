import { ValidationError } from 'class-validator';
import { NextFunction, Request, Response } from "express";
import { Any } from "typeorm";
import {
  addUserInteractor,
  getUsersInteractor,
} from "../providers/adapters/userAdapter";

export class UserController {
  static save = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const user = request.body;
      const result = await addUserInteractor.execute(user);
      if (result.length > 0) {
        return response.status(400).json(result);
        } else {
        return response.status(201).json(result);
      }
    } catch (err) {
      return response.status(500).send(err);
    }
  };

  static getUsers = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const users = await getUsersInteractor.execute();
      return response.status(200).json(users);
    } catch (err) {
      return response.status(500).send(err);
    }
  };
}
