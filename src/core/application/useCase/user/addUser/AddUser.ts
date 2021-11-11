import { AddUserRequest } from "./AddUserRequest";
import { AddUserResponse } from "./AddUserResponse";
import { IUserRepository } from '../../../../repository/IUserRepository';
import { User } from "../../../../entities/User";
import { ValidationError } from "class-validator";

export class AddUser {
  constructor(private repository: IUserRepository){}

  async execute(request: AddUserRequest): Promise<any> {
      const response = new AddUserResponse();
      const user = new User(request.username, request.email,request.age)
      return this.repository.saveUser(user).then(res => {
        if(res.length > 0) {
          return res 
        } else {
          response.user = "welcome"
          return response
        }
      })

  }

}