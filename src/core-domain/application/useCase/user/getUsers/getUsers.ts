import { GetUsersResponse } from './GetUsersResponse';
import { IUserRepository } from '../../../../repository/IUserRepository';

export class GetUsers {
  constructor(private repository: IUserRepository){}

  async execute() {
      const response = new GetUsersResponse();
      response.users = await this.repository.getUsers()
      return response
  }

}