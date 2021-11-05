import { IComment } from '../../../../entities/Comment';
export class UpdateCommentResponse {
  commentUnknown: boolean = false
  comment: IComment
  
}