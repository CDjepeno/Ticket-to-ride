import { Utils } from "../../../src/core/common/Utils";
import { ITicket, Status } from "../../../src/core/entities/Ticket";

export class TicketBuilderRepository {
  static ticketStub(): ITicket {
    return {
      id: 1,
      title: "concert",
      description: "Le ticket de concert",
      status: Status.WIP,
      userId: 2
    };
  }

  static usersStub(): ITicket[] {
    return [
      {
        id: 3,
        title: "concert",
        description: "Le ticket de concert",
        status: Status.WIP,
        userId: 4,
      },
      {
        id: 5,
        title: "concert",
        description: "Le ticket de foot",
        status: Status.WIP,
        userId: 6,
      }
    ];
  }
}
