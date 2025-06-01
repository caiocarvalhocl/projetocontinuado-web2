import { Router } from "express";
import { userController } from "../controllers/UserController.js";
import { middlewares } from "../middlewares/middlewares.js";

const userRoutes = Router();

userRoutes.get("/list", middlewares.sessionControl, (req, res) =>
  userController.findUsers(req, res),
);
userRoutes.get("/register", (req, res) =>
  userController.getPageRegister(req, res),
);
userRoutes.get("/", (req, res) => res.render("users/"));

userRoutes.post("/register", (req, res) => userController.register(req, res));
userRoutes.post("/login", (req, res) => userController.login(req, res));

userRoutes.post("/update/:id", (req, res) => userController.update(req, res));
userRoutes.get("/edit/:id", (req, res) => userController.getEditPage(req, res));
userRoutes.post("/:id", middlewares.sessionControl, userController.delete);

userRoutes.get("/logout", (req, res) => userController.logout(req, res));
export { userRoutes };
