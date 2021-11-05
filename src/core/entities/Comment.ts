export interface IComment {
  id?: number,
  content: string,
  userId?: number,
  ticketId?: number
}

export class Comment implements IComment {
  id?: number
  constructor(
      readonly content: string,
      readonly userId: number,
      readonly ticketId: number){}
}