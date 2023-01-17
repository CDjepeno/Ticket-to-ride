import { AddUserRequest } from "./AddUserRequest";
import { AddUserResponse } from "./AddUserResponse";
import { IUserRepository } from '../../../../repository/IUserRepository';
import { User } from "../../../../entities/User";

export class AddUser {
  constructor(private repository: IUserRepository){}

  async execute(request: AddUserRequest): Promise<any> {
      const response = new AddUserResponse();
      const user = new User(request.username, request.email,request.age)
      const duplicateUser = await this.repository.findUserByEmail(user.email)
      if(duplicateUser) {
        throw new Error('user not found')
      }
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