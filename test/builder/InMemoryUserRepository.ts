import { IUser } from '../../src/core/entities/User';
import { IUserRepository } from '../../src/core/repository/IUserRepository';
import { AddUserResponse } from '../../src/core/appilcation/useCase/user/AddUserResponse';
import { UserBuilderRepository } from './UserBuilderRepository';
export class InMemoryUserRepository implements IUserRepository{
  private users: Map<number, IUser>

  constructor() {
      this.users = new Map()
  }

  async saveUser(user: IUser): Promise<string> {
      if(this.users.get(user.id)) {
          this.users.delete(user.id);
      }
      this.users.set(user.id,user)
      return Promise.resolve('user added')
  }

  getUsers(){
    const result = UserBuilderRepository.usersStub()
    return Promise.resolve(result)
  }
}