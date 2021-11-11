import { Utils } from "../../../src/core/common/Utils"
import { IUser } from "../../../src/core/entities/User"

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
              id: 1,
              username: "Vaught",
              email: "vernon@gmail.com",
              age: 26
          },
          {
            id: 2,
            username: "Kent",
            email: "beck@gmail.com",
            age: 44
          },
          {
            id: 3,
            username: "Martin",
            email: "fowler@gmail.com",
            age: 25
          }
      ]
  }

}
