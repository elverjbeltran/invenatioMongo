import express from "express";

import { obtenCategory } from "../Controllers/Categoria.controllers.js";

const routes = express.Router();

routes.get("/all",obtenCategory);

export default routes;