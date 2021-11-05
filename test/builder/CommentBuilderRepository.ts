import { Utils } from "../../src/core/common/Utils";
import { IComment } from '../../src/core/entities/Comment';
export class CommentBuilderRepository {
  static commentStub(): IComment {
    return {
      id: Utils.generateUniqueId(),
      content: "Je suis un premier commentaire",
      userId: Utils.generateUniqueId(),
      ticketId: Utils.generateUniqueId(),
    };
  }

  static commentsStub(): IComment[] {
    return [
      {
        id: Utils.generateUniqueId(),
        content: "Je suis un premier commentaire",
        userId: Utils.generateUniqueId(),
        ticketId: Utils.generateUniqueId(),
      },
      {
        id: Utils.generateUniqueId(),
        content: "Je suis un deuxième commentaire",
        userId: Utils.generateUniqueId(),
        ticketId: Utils.generateUniqueId(),
      }
    ];
  }
}
