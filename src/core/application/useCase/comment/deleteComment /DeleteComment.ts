import { ICommentRepository } from '../../../../repository/ICommentRepository';
import { DeleteCommentResponse } from './DeleteCommentResponse';

export class DeleteComment {
  constructor(private repository: ICommentRepository){}

  async execute(idComment: number) {
      const response = new DeleteCommentResponse();
      await this.repository.deleteComment(idComment)

      response.comment = "comment deleted"

      return response
  }

}