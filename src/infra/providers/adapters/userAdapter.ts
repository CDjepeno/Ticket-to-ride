import { AddUser } from "../../../core/application/useCase/user/addUser/AddUser";
import { GetUsers } from "../../../core/application/useCase/user/getUsers/getUsers";
import { UserProvider } from "../UserProvider";

const userRepository = new UserProvider();

const addUserInteractor = new AddUser(userRepository);
const getUsersInteractor = new GetUsers(userRepository);

export { addUserInteractor, getUsersInteractor };
