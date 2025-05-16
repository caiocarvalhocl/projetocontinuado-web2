import { Router } from "express";
import { userRoutes } from "./user.routes.js";
import { spaceRoutes } from "./space.routes.js";
import { resourceRoutes } from "./resource.routes.js";

const router = Router();

router.use("/home", (req, res) => {
  res.render("home");
});
router.use("/users", userRoutes);
router.use("/spaces", spaceRoutes);
router.use("/resources", resourceRoutes);

export { router };
