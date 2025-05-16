import express from "express";
import { router } from "./routes/routes.js";
import { sequelize } from "./config/SQLDatabase.js";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import "./models/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
  }),
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

(async () => {
  try {
    await sequelize.authenticate();

    await sequelize.sync({ alter: true });
  } catch (error) {
    console.log(error.message);
  }
})();

app.listen(3333, () => console.log("SERVER ON"));
