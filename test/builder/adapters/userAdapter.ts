import { AddUser } from '../../../src/core/application/useCase/user/addUser/AddUser';
import { GetUsers } from '../../../src/core/application/useCase/user/getUsers/getUsers';
import { InMemoryUserRepository } from '../user/InMemoryUserRepository';


const userRepository = new InMemoryUserRepository();

const addUserInteractorForTest = new AddUser(userRepository);
const getUsersInteractorForTest = new GetUsers(userRepository);

export { addUserInteractorForTest, getUsersInteractorForTest };
