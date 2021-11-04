import { Utils } from "../common/Utils"

export interface IUser {
  id?: number,
  username: string,
  email: string,
  age: string,
}

export class User implements IUser {
  id?: number
  constructor(
      readonly username: string,
      readonly email: string,
      readonly age: string){
      this.id = Utils.generateUniqueId()
  }
}