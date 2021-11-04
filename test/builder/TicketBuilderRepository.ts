import { Utils } from "../../src/core/common/Utils";
import { ITicket, Status } from "../../src/core/entities/Ticket";
export class TicketBuilderRepository {
  static ticketStub(): ITicket {
    return {
      id: Utils.generateUniqueId(),
      title: "concert",
      description: "Le ticket de concert",
      status: Status.WIP,
      userId: Utils.generateUniqueId()
    };
  }

  static usersStub(): ITicket[] {
    return [
      {
        id: Utils.generateUniqueId(),
        title: "concert",
        description: "Le ticket de concert",
        status: Status.WIP,
        userId: Utils.generateUniqueId(),
      },
      {
        id: Utils.generateUniqueId(),
        title: "concert",
        description: "Le ticket de foot",
        status: Status.WIP,
        userId: Utils.generateUniqueId(),
      },
    ];
  }
}
