import { IUser } from '../entities/User';
import { AddUserResponse } from '../appilcation/useCase/user/AddUserResponse';
export interface IUserRepository {
  getUsers(): Promise<IUser[]>

  saveUser(user: IUser): Promise<string>
}