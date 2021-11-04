import { AddUser } from '../../../core/application/useCase/user/addUser/AddUser';
import { UserProvider } from '../UserProvider';



const userRepository = new UserProvider()

const addUserInteractor = new AddUser(userRepository)

export {addUserInteractor}