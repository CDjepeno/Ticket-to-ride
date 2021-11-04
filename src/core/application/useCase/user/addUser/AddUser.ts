import { AddUserRequest } from "./AddUserRequest";
import { AddUserResponse } from "./AddUserResponse";
import { IUserRepository } from '../../../../repository/IUserRepository';
import { User } from "../../../../entities/User";

export class AddUser {
  constructor(private repository: IUserRepository){}

  async execute(request: AddUserRequest) {
      const response = new AddUserResponse();
      const user = new User(request.username, request.email,request.age)
      await this.repository.saveUser(user)
      response.user = "Welcome"

      return response
  }

}