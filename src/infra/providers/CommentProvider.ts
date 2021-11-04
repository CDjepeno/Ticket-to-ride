import { getRepository } from 'typeorm';
import { IComment } from '../../core/entities/Comment';
import { Comment } from '../models/Comment';
import { ICommentRepository } from '../../core/repository/ICommentRepository';

export class CommentProvider implements ICommentRepository {

  async saveComment(comment: IComment){
    try {
      const newComment = await getRepository(Comment).create(comment)
      await getRepository(Comment).save(newComment)
      return "Welcome"
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

}