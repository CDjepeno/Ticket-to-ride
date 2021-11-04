import { Router } from 'express'
import { UserController } from '../controller/UserController'

const userRoutes = Router()

userRoutes.post('/users', UserController.save)

export default userRoutes
