import { Router } from "express";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const usersController = new UsersController();

routes.post("/users", usersController.create);
routes.get("/users", usersController.read);
routes.put("/users", usersController.update);
routes.delete("/users", usersController.delete);

export { routes };