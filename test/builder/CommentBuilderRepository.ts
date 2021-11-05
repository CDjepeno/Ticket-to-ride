import { Utils } from "../../src/core/common/Utils";
import { Status } from "../../src/core/entities/Ticket";
import { IComment } from '../../src/core/entities/Comment';
export class CommentBuilderRepository {
  static ticketStub(): IComment {
    return {
      id: Utils.generateUniqueId(),
      content: "Je suis un premier commentaire",
      userId: Utils.generateUniqueId(),
      ticketId: Utils.generateUniqueId(),
    };
  }

  static usersStub(): IComment[] {
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
