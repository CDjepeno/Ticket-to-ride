
export interface ITicket {
  id?: number,
  title: string,
  description: string,
  status: Status,
  userId: number
}

export enum Status {
  TODO = "todo",
  WIP = "wip",
  DONE = "done"
}

export class Ticket implements ITicket {
  id?: number
  constructor(
      readonly title: string,
      readonly description: string,
      readonly status: Status,
      readonly userId: number){}
}