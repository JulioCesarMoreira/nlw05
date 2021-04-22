import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const usersController = new UsersController();
const settingsController = new SettingsController();

routes.post("/users", usersController.create);
routes.get("/users", usersController.read);
routes.put("/users", usersController.update);
routes.delete("/users", usersController.delete);

routes.post("/settings", settingsController.create);
routes.get("/settings", settingsController.read);
routes.put("/settings", settingsController.update);
routes.delete("/settings", settingsController.delete);

export { routes };