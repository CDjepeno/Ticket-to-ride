import { IUser } from '../../../src/core-domain/entities/User';
import { IUserRepository } from '../../../src/core-domain/repository/IUserRepository';
import { AddUserResponse } from '../../../src/core-domain/application/useCase/user/addUser/AddUserResponse';
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
      return Promise.resolve('Welcome')
  }

  getUsers(){
    const result = UserBuilderRepository.usersStub()
    return Promise.resolve(result)
  }

  saveUsers(usersTab: IUser[]) {
    for(let user of usersTab) {
        this.users.set(user.id ,user)
    }
    return this.users
    }

    async findUserByEmail(email: string) {
        const users = Array.from(this.users)
        return users.find(u => u[1].email  === email)?.[1]
    }
}