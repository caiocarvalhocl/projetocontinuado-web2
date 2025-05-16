import { DataTypes } from "sequelize";
import { sequelize } from "../config/SQLDatabase.js";
import { User } from "./user.js";

const Space = sequelize.define(
  "Space",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("sala", "auditorio", "quadra", "coworking"),
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "spaces",
  },
);

Space.belongsTo(User, { foreignKey: "manager_id" });
User.hasMany(Space, { foreignKey: "manager_id" });

export { Space };
