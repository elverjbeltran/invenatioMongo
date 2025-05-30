import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import routes from "./routes/categorias.routes.js";

const app = express();

dotenv.config();

app.use("/categoria",routes);

const PORT = process.env.PORT;
conectarDB();
app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});
