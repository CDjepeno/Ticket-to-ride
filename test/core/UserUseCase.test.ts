import { addUserInteractorForTest, getUsersInteractorForTest } from "../builder/adapters/userAdapter";
import { InMemoryUserRepository } from "../builder/user/InMemoryUserRepository";
import { UserBuilderRepository } from "../builder/user/UserBuilderRepository";

describe("User UseCase test", () => {
  it("Should register a new user", () => {
    const user = UserBuilderRepository.userStub(); 
    const result = addUserInteractorForTest.execute(user);
    
    expect(result).resolves.toEqual("Welcome");
  });

  it("Should be return array of users", async() => {
    const expected = UserBuilderRepository.usersStub();
    const repo = new InMemoryUserRepository();
    repo.saveUsers(expected)
    const result = await getUsersInteractorForTest.execute()

    expect(result.users).toEqual(expected);
  });
});
