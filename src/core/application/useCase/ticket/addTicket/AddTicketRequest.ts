import { Status } from "../../../../../infra/models/Ticket";

export class AddTicketRequest {
  constructor(
  readonly title: string,
  readonly description: string,
  readonly status: Status,
  readonly userId: number
  ) {}
}
