
export class UpdateCommentRequest {
  constructor(
  readonly content: string,
  readonly ticketId: number,
  readonly userId: number
  ) {}
}
