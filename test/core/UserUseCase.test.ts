import { UserBuilderRepository } from '../builder/UserBuilderRepository';
import { InMemoryUserRepository } from '../builder/InMemoryUserRepository';



describe('User UseCase test', () => {
  it('Should register a new user', () => {
    const user = UserBuilderRepository.userStub()
    const userStub = new InMemoryUserRepository()
    const result = userStub.saveUser(user)
    expect(result).resolves.toEqual('user added')
})
})