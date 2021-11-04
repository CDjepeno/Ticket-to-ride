import { ITicket } from '../entities/Ticket';
import { IComment } from '../entities/Comment';
import { Ticket } from '../../infra/models/Ticket';
export interface ICommentRepository {
  
  saveComment(comment: IComment): Promise<string>
  getCommentForOneTicket(idTicket: number): Promise<any>
}