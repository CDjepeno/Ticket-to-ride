import { Status } from "../../../../../infra/models/Ticket";

export class AddCommentRequest {
  constructor(
  readonly content: string,
  readonly userId: number,
  readonly ticketId: number,
  ) {}
}
