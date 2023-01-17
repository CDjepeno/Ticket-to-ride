import { NextFunction, Request, Response } from "express";
import {
  addCommentInteractor,
  deleteCommentInteractor,
  updateCommentInteractor,
} from "../providers/adapters/commentAdapter";
import { CommentProvider } from "../providers/CommentProvider";

export class CommentController {
  static save = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const comment = request.body;
      const id = request.params.id
      
      const result = await addCommentInteractor.execute(comment, +id);
      if (result.length > 0) {
        return response.status(400).json(result);
      } else if (typeof result === "string") {
        return response.status(400).json(result);
      } else {
        return response.status(201).json(result);
      }
    } catch (err) {
      return response.status(500).send(err);
    }
  };

  static getCommentsForOneTicket = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const provider = new CommentProvider();
      const id = +request.params.id;

      const comments = await provider.getCommentsForOneTicket(id);
      return response.status(200).json(comments);
    } catch (err) {
      return response.status(500).send(err);
    }
  };

  static update = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const newComment = request.body;
      const id = +request.params.id;

      const result = await updateCommentInteractor.execute(newComment, id);

      return response.status(200).json(result);
    } catch (err) {
      return response.status(500).send(err);
    }
  };

  static delete = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const idComment = +request.params.id;
      const result = await deleteCommentInteractor.execute(idComment);
      return response.status(200).json(result);
    } catch (err) {
      return response.status(500).send(err);
    }
  };
}
