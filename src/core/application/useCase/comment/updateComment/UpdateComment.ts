import { AddTicketRequest } from "./UpdateCommentRequest";
import { ICommentRepository } from "../../../../repository/ICommentRepository";
import { UpdateCommentResponse } from "./UpdateCommentResponse";
import { Comment } from "../../../../entities/Comment";

export class UpdateComment {
  constructor(private repository: ICommentRepository) {}

  async execute(request: AddTicketRequest, id: number) {
    const response = new UpdateCommentResponse();
    const oldTicket = await this.repository.getOneComment(id);
    let hasError = false;

    if (oldTicket === undefined) {
      hasError = true;
      response.commentUnknown = true;

      return response;
    }

    const newComment = new Comment(
      request.content,
      +request.userId,
      +request.ticketId
    );

    await this.repository.updateComment(newComment, id);
    return newComment;
  }
}
