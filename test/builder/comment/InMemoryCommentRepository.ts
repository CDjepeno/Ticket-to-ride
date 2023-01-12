import { ICommentRepository } from "../../../src/core-domain/repository/ICommentRepository";
import { IComment } from "../../../src/core-domain/entities/Comment";
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
    const commentStub = CommentBuilderRepository.commentStub();
    this.saveComment(commentStub);

    comment.content = "commentaire changer";

    this.comments.set(id, comment);
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
    const commentStub = CommentBuilderRepository.commentStub();
    this.comments.set(commentStub.id, commentStub);

    this.comments.delete(id);
    return Promise.resolve("comment deleted");
  }

  async getOneComment(id: number): Promise<IComment> {
    const commentStub = CommentBuilderRepository.commentStub();
    this.saveComment(commentStub);
    return this.comments.get(id);
  }
}
