import { Router } from 'express'
import { UserController } from '../controller/UserController'

const userRoutes = Router()

userRoutes.post('/users', UserController.save)
userRoutes.get('/users', UserController.getUsers)

export default userRoutes
