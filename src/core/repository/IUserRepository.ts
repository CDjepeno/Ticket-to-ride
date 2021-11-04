import { IUser } from '../entities/User';
import { AddUserResponse } from '../application/useCase/user/addUser/AddUserResponse';
export interface IUserRepository {
  getUsers(): Promise<IUser[]>

  saveUser(user: IUser): Promise<string>
}