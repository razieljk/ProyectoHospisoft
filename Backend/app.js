//todo: Este proyecto consiste  en una API REST para un sistema hospitalario

//*IMPORTAMOS LAS LIBRERIAS

import express, { json } from "express";
import cors from "cors";
import userRutas  from "./src/routes/usuario.routes.js";

//* instancio la libreria en un objeto

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;
app.use("/api", userRutas);

export default app;