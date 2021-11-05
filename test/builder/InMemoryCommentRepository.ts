import { TicketBuilderRepository } from "./TicketBuilderRepository";
import { ICommentRepository } from "../../src/core/repository/ICommentRepository";
import { IComment } from "../../src/core/entities/Comment";
import { CommentBuilderRepository } from "./CommentBuilderRepository";
export class InMemoryCommentRepository implements ICommentRepository {
  private comments: Map<number, IComment>;

  constructor() {
    this.comments = new Map();
  }
  getCommentsForOneTicket(idComment: number): Promise<any> {
    const result = CommentBuilderRepository.commentStub();
    return Promise.resolve("ticket updated");
  }
  updateComment(comment: IComment, id: number): Promise<string> {
    const result = TicketBuilderRepository.usersStub();
    return Promise.resolve("ticket updated");
  }

  async saveComment(comment: IComment): Promise<string> {
    if (this.comments.get(comment.id)) {
      this.comments.delete(comment.id);
    }
    this.comments.set(comment.id, comment);
    return Promise.resolve("comment added");
  }

  async deleteComment(id: number): Promise<string> {
    return Promise.resolve("comment deleted");
  }

  async getOneComment(id: number): Promise<IComment> {
    return Promise.resolve(this.comments.get(id));
  }
}
