//todo: aqui se encuantran todoas las rutas de modelo usuarios (endpoints)

import { Router } from "express";

import * as userController from '../controllers/usuario.controller.js';

//*instancio el metodo router de express

const router = Router();

//*rutas del modulo usuarios

router.get("/usuarios/listartodos", userController.getUsiarios);

router.get("/usuarios/listarporid/:id", userController.getUsuarioById);

router.post("/usuarios/crearusuario", userController.createUsuario);

router.put("/usuarios/editarusuario/:id", userController.updateUsuarios);

export default router;