import { User } from "../models/user.js";

class UserController {
  async register(req, res) {
    try {
      const { name, email, password, role } = req.body;

      const user = await User.create({ name, email, password, role });

      if (!user) throw new Error("Problem with user register controller");

      res.redirect("/users");
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: { email, password },
        raw: true,
      });

      if (!user) throw new Error("Problem with user login controller");

      res.render("users/login", { user });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  getPageRegister(req, res) {
    res.render("users/register");
  }

  async findUsers(req, res) {
    try {
      const users = await User.findAll({ raw: true });

      if (!users) return res.status(404).json({ message: "any user founded" });

      res.render("users/list", { users });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getEditPage(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id, { raw: true });

      if (!user) return res.status(404).send("Usuário não encontrado");

      res.render("users/edit", { user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password, role } = req.body;

      const user = await User.findByPk(id);

      if (!user) return res.status(404).json({ message: "User not found" });

      await user.update({ name, email, password, role });

      res.redirect("/users");
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);

      if (!user) return res.status(404).json({ message: "User not found" });

      await user.destroy();

      res.redirect("/users");
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export const userController = new UserController();
