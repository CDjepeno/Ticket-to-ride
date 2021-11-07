import { getRepository } from 'typeorm';
import { IUser } from '../../core/entities/User';
import { IUserRepository } from '../../core/repository/IUserRepository';
import { User } from '../models/User';

export class UserProvider implements IUserRepository {

  async saveUser(user: IUser){
    try {
      const newUser = await getRepository(User).create(user)
      await getRepository(User).save(newUser)
      return "Welcome"
    } catch (err) {
      console.log('error')
      throw new Error(err)
    }
  }
  async getUsers() {
    try {
      return await getRepository(User).find()
    } catch (e) {
      throw new Error(e)
    }
  }

}