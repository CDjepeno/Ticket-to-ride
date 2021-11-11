import { Utils } from "../../../src/core/common/Utils";
import { IComment } from '../../../src/core/entities/Comment';
export class CommentBuilderRepository {
  static commentStub(): IComment  {
    return {
      id: 1,
      content: "Je suis un premier commentaire",
      userId: 2,
      ticketId: 3,
    };
  }

  static commentsStub(): IComment[] {
    return [
      {
        id: 4,
        content: "Je suis un premier commentaire",
        userId: 5,
        ticketId: 6,
      },
      {
        id: 7,
        content: "Je suis un deuxième commentaire",
        userId: 8,
        ticketId: 9,
      }
    ];
  }
}
