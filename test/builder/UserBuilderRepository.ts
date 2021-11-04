import { IUser } from '../../src/core/entities/User';
import { Utils } from '../../src/core/common/Utils';
export class UserBuilderRepository {

  static userStub(): IUser{
      return {
          id: Utils.generateUniqueId(),
          username: "Vaught",
          email: "vernon@gmail.com",
          age: 50
      }
  }

  static usersStub(): IUser[] {
      return [
          {
              id: Utils.generateUniqueId(),
              username: "Vaught",
              email: "vernon@gmail.com",
              age: 26
          },
          {
            id: Utils.generateUniqueId(),
            username: "Kent",
            email: "beck@gmail.com",
            age: 44
          },
          {
            id: Utils.generateUniqueId(),
            username: "Martin",
            email: "fowler@gmail.com",
            age: 25
          }
      ]
  }

}
