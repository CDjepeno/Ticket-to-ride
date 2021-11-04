export interface IComment {
  id?: number,
  content: string,
}

export class Comment implements IComment {
  id?: number
  constructor(
      readonly content: string){}
}