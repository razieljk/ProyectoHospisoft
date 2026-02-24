//* llamo el modelo de los usuarios
import { usuarioModel } from "../models/usuario.model.js";

export const getUsiarios = async (req, res) =>{
    try {
        const resultado = await usuarioModel.findAll();
        res.json({resultado});
    } catch (error) {
        res.status(500).json({
      error: "error al listar los ciudadanos",      
        });
    }
};

export const getUsuarioById = async (req, res) =>{
try {
    const resultado = await usuarioModel.findById(req.params.id);
    res.json({resultado});
} catch (error) {
    res.status(500).json({
        error: "Error al buscar ciudadanos",
    });
}
};

export const createUsuario = async (req, res) =>{
const data = {
    nombre : req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    contrasena: req.body.contrasena,
    telefono: req.body.telefono,
    rol_id: req.body.rol_id,
    estado: req.body.estado,
};
try {
    const resultado = await usuarioModel.create(data);
    res.json({resultado});
} catch (error) {
    res.status(500).json({
        error: "error al agregar usuario",
    });
}
};

export const updateUsuarios = async (req, res) =>{
    const data = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      contrasena: req.body.contrasena,
      telefono: req.body.telefono,
      rol_id: req.body.rol_id,
      estado: req.body.estado,
    };
    try {
      const resultado = await usuarioModel.update(req.params.id, req.params.body);
      res.json({ resultado });
    } catch (error) {
      res.status(500).json({
        error: "error al Editar usuario",
      });
    }
}