import { getRepository } from "typeorm";
import { IComment } from "../../core/entities/Comment";
import { ICommentRepository } from "../../core/repository/ICommentRepository";
import { Comment } from "../models/Comment";

export class CommentProvider implements ICommentRepository {
  async saveComment(comment: IComment) {
    try {
      const newComment = await getRepository(Comment).create(comment);
      await getRepository(Comment).save(newComment);
      return "comment added";
    } catch (err) {
      throw new Error(err);
    }
  }

  async getCommentsForOneTicket(idTicket: number) {
    try {
      const ticketComment = await getRepository(Comment)
        .createQueryBuilder("comment")
        .where("comment.ticketId = :id", { id: idTicket })
        .getMany();

      return ticketComment;
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteComment(idComment: number) {
    try {
      const deleteComment = await getRepository(Comment).findOne(idComment);
      if (deleteComment) {
        await getRepository(Comment).delete(idComment);
        return "comment deleted";
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateComment(comment: IComment, id: number) {
    try {
      const commentForUpdate = await getRepository(Comment).findOne(id);
      if (commentForUpdate) {
        getRepository(Comment).merge(commentForUpdate, comment);
        await getRepository(Comment).save(commentForUpdate);

        return "comment updated";
      }
      throw new Error("unknow this comment");
    } catch (err) {
      throw new Error(err);
    }
  }

  async getOneComment(idComment: number) {
    try {
      const comment = await getRepository(Comment).findOne(idComment);
      if (comment) {
        return comment;
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}
