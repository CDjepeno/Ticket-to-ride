import { Utils } from "../common/Utils"

export interface IUser {
  id?: number,
  username: string,
  email: string,
  age: number,
}

export class User implements IUser {
  id?: number
  constructor(
      readonly username: string,
      readonly email: string,
      readonly age: number){}
}