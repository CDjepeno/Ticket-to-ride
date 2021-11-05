import { IComment } from '../entities/Comment';
export interface ICommentRepository {
  
  saveComment(comment: IComment): Promise<string>
  getCommentForOneTicket(idTicket: number): Promise<any>
}