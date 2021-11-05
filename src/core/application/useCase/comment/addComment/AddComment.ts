import { AddCommentRequest } from './AddCommentRequest';
import { AddCommentResponse } from './AddCommentResponse';
import { ICommentRepository } from '../../../../repository/ICommentRepository';
import { Comment } from '../../../../entities/Comment';

export class AddComment {
  constructor(private repository: ICommentRepository){}

  async execute(request: AddCommentRequest) {
      const response = new AddCommentResponse();
      const newComment = new Comment(request.content, request.userId,request.ticketId)
      await this.repository.saveComment(newComment)
      response.user = "ticket added"

      return response
  }

}