
export class AddTicketRequest {
  constructor(
  readonly id: number,
  readonly content: string,
  readonly ticketId: string,
  readonly userId: number
  ) {}
}
