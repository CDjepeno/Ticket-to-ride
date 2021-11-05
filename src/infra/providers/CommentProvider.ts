import { getRepository } from 'typeorm';
import { IComment } from '../../core/entities/Comment';
import { Comment } from '../models/Comment';
import { ICommentRepository } from '../../core/repository/ICommentRepository';

export class CommentProvider implements ICommentRepository {

  async saveComment(comment: IComment){
    try {
      const newComment = await getRepository(Comment).create(comment)
      await getRepository(Comment).save(newComment)
      return "comment added"
    } catch (err) {
      throw new Error(err)
    }
  }

  async getCommentForOneTicket(idTicket: number) {
    try {
      const ticketComment = await getRepository(Comment)
      .createQueryBuilder("comment")
      .where("comment.ticketId = :id", { id : idTicket })
      .getMany()
      
      console.log(ticketComment)
       return ticketComment
    } catch (e) {
      throw new Error(e)
    }
  }

  async deleteComment(idComment: number) {
    try {
      const deleteComment = await getRepository(Comment).findOne(idComment);
      if(deleteComment) {
        await getRepository(Comment).delete(idComment);
        return 'comment deleted'
      }
    } catch (err) {
      throw new Error(err)
    }
  }

}