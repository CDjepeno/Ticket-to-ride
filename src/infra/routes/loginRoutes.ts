import { LoginController } from "../controller/LoginController";
import { Router } from 'express';
import { authLogin } from "../middlewares/authLogin";


const loginRoute = Router()

loginRoute.post("/login",authLogin, LoginController.login);

export default loginRoute