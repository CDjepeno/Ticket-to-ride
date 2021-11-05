import { ITicket } from "../../src/core/entities/Ticket";
import { TicketBuilderRepository } from "./TicketBuilderRepository";
import { ICommentRepository } from '../../src/core/repository/ICommentRepository';
import { IComment } from '../../src/core/entities/Comment';
export class InMemoryCommentRepository implements ICommentRepository {
  private comments: Map<number, IComment>;

  constructor() {
    this.comments = new Map();
  }

  async saveComment(comment: IComment): Promise<string> {
    if (this.comments.get(comment.id)) {
      this.comments.delete(comment.id);
    }
    this.comments.set(comment.id, comment);
    return Promise.resolve("comment added");
  }

  async getCommentForOneTicket(idticket: number): Promise<string> {
    const result = TicketBuilderRepository.usersStub();
    return Promise.resolve("ticket updated");
  }


}
