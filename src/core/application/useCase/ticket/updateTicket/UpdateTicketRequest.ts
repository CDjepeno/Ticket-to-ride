import { Status } from "../../../../../infra/models/Ticket";

export class UpdateTicketRequest {
  constructor(
  readonly id: number,
  readonly title: string,
  readonly description: string,
  readonly status: Status,
  readonly userId: number
  ) {}
}
