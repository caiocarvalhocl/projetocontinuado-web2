import { Router } from "express";
import { resourceController } from "../controllers/ResourceController.js";

const resourceRoutes = Router();

resourceRoutes.get("/", (req, res) => resourceController.findAll(req, res));
resourceRoutes.get("/create", (req, res) =>
  resourceController.getCreatePage(req, res),
);
resourceRoutes.post("/create", (req, res) =>
  resourceController.create(req, res),
);
resourceRoutes.post("/delete/:id", (req, res) =>
  resourceController.delete(req, res),
);

export { resourceRoutes };
