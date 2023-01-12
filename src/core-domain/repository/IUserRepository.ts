import { IUser } from '../entities/User';
import { ValidationError } from 'class-validator';
export interface IUserRepository {
  getUsers(): Promise<IUser[]>

  saveUser(user: IUser): Promise<string|ValidationError[]>;
}