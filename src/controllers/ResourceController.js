import { Resource } from "../models/resource.js";
import { Space } from "../models/space.js";

class ResourceController {
  async findAll(req, res) {
    try {
      const resources = await Resource.findAll({
        include: [{ model: Space }],
        raw: true,
        nest: true,
      });
      res.render("resources/list", { resources });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getCreatePage(req, res) {
    const spaces = await Space.findAll({ raw: true });
    res.render("resources/create", { spaces });
  }

  async create(req, res) {
    try {
      const { name, description, spaceId } = req.body;

      const space = await Space.findByPk(spaceId);
      if (!space) throw new Error("Espaço não encontrado");

      await Resource.create({ name, description, spaceId });
      res.redirect("/resources");
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Resource.destroy({ where: { id } });
      res.redirect("/resources");
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

export const resourceController = new ResourceController();
