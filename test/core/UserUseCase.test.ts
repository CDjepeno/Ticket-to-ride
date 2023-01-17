import { addUserInteractorForTest, getUsersInteractorForTest } from "../builder/adapters/userAdapter";
import { InMemoryUserRepository } from "../builder/user/InMemoryUserRepository";
import { UserBuilderRepository } from "../builder/user/UserBuilderRepository";

describe("User UseCase test", () => {
  it("Should register a new user", async () => {
    const user = UserBuilderRepository.userStub(); 
    const result = await addUserInteractorForTest.execute(user);
    
    expect(result).toBe("Welcome");
  });

  it.only("Should throw a error in email conflict", async () => {
    const user = UserBuilderRepository.userStub(); 
    // const result2 = await addUserInteractorForTest.execute(user);
    await addUserInteractorForTest.execute(user)
    function get() {
      return addUserInteractorForTest.execute(user)
    }
    
    expect(get).rejects.toThrow("user not found");
  });

  it("Should be return array of users", async() => {
    const expected = UserBuilderRepository.usersStub();
    const repo = new InMemoryUserRepository();
    repo.saveUsers(expected)
    const result = await getUsersInteractorForTest.execute()

    expect(result.users).toEqual(expected);
  });
});
