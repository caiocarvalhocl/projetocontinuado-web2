import { DataTypes } from "sequelize";
import { Space } from "./space.js";
import { sequelize } from "../config/SQLDatabase.js";

const Resource = sequelize.define("Resource", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  spaceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "spaces",
      key: "id",
    },
  },
});

Space.hasMany(Resource, { foreignKey: "spaceId" });
Resource.belongsTo(Space, { foreignKey: "spaceId" });

export { Resource };
