import { IUser } from '../entities/User';
import { ValidationError } from 'class-validator';
export interface IUserRepository {
  getUsers(): Promise<IUser[]>
  findUserByEmail(email: string): Promise<IUser|undefined>
  saveUser(user: IUser): Promise<string|ValidationError[]>;
}