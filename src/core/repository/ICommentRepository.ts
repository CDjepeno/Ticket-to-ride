import { IComment } from '../entities/Comment';
export interface ICommentRepository {
  
  saveComment(comment: IComment): Promise<string>
  getCommentsForOneTicket(idComment: number): Promise<any>
  deleteComment(id: number): Promise<string>
  updateComment(comment: IComment, id: number): Promise<string>
  getOneComment(id: number): Promise<IComment>
}