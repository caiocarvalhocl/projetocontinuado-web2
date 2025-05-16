import { raw } from "express";
import { Space } from "../models/space.js";
import { User } from "../models/user.js";

class SpaceController {
  async findAll(req, res) {
    try {
      const spaces = await Space.findAll({
        include: [
          {
            model: User,
            as: "User",
            attributes: ["name"],
          },
        ],
        raw: true,
        nest: true,
      });

      return res.render("spaces", { spaces });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const space = await Space.create({
        ...req.body,
      });

      res.redirect("/spaces");
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export const spaceController = new SpaceController();
