import { Router } from "express";
import { UserController } from "../controller/UserController";

const userRoutes = Router();

userRoutes.post("/user", UserController.save);
userRoutes.get("/users", UserController.getUsers);

export default userRoutes;
