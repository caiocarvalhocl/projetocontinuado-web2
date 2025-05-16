import { Router } from "express";
import { spaceController } from "../controllers/SpaceController.js";

const spaceRoutes = Router();

spaceRoutes.get("/", (req, res) => spaceController.findAll(req, res));
spaceRoutes.post("/create", (req, res) => spaceController.create(req, res));

export { spaceRoutes };
