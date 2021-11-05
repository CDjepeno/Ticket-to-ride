import { AddCommentRequest } from "./AddCommentRequest";
import { AddCommentResponse } from "./AddCommentResponse";
import { ICommentRepository } from "../../../../repository/ICommentRepository";
import { Comment } from "../../../../entities/Comment";

export class AddComment {
  constructor(private repository: ICommentRepository) {}

  async execute(request: AddCommentRequest) {
    try {
      const response = new AddCommentResponse();
      const newComment = new Comment(
        request.content,
        request.userId,
        request.ticketId
      );
      await this.repository.saveComment(newComment);
      response.user = "comment added";

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }
}
