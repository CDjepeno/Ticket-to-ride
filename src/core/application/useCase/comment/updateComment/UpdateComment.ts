import { AddTicketRequest } from "./UpdateCommentRequest";
import { ICommentRepository } from "../../../../repository/ICommentRepository";
import { UpdateCommentResponse } from "./UpdateCommentResponse";
import { Comment } from "../../../../entities/Comment";

export class UpdateComment {
  constructor(private repository: ICommentRepository) {}

  async execute(request: AddTicketRequest, id: number) {
    try {
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

      return  this.repository.updateComment(newComment, id).then(res => {
        if (res.length > 0) {
          return res
        } 
        response.comment = "comment updated";
        return response
      })
    } catch (err) {
      throw new Error(err);
    }
  }
}
