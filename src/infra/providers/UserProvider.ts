import { validate } from 'class-validator';
import { getRepository } from "typeorm";
import { IUser } from "../../core-domain/entities/User";
import { IUserRepository } from "../../core-domain/repository/IUserRepository";
import { User } from "../models/User";

export class UserProvider implements IUserRepository {
  async saveUser(user: IUser) {
    try {
      const newUser = getRepository(User).create(user);

      const err = await validate(newUser);
      if (err.length > 0) {
        return err;
      } else {
        await getRepository(User).save(newUser);
        return "Welcome";
      }
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async getUsers() {
    return getRepository(User).find();
  }

  async findUserByEmail(email: string) {
      return getRepository(User)
      .find({email})
      .catch(() => undefined)
  }
}
