//todo: Capa Modelo usuarios hospisoft
//*registrar usuarios

//* importo la conexion

import {db} from './conexionBD.js'

//TODO : LISTAR TODOS LOS USUARIOS

//* Usamos las promesas (asincoronico)
export const usuarioModel = {
  findAll: async () => {
    const sql = "SELECT * FROM usuarios";
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql = "SELECT * FROM usuarios WHERE id_usuario = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data, id) => {
    const sql = "INSERT INTO usuarios SET ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },
  update: async (id, data) => {
    const sql = "UPDATE usuarios SET ? WHERE id_usuario = ?";
    const [rows] = await db.query(sql, [data], [id]);
    return rows;
  },
  //   updateState: async (id, data) => {
  //     const sql = "UPDATE usuarios SET ? WHERE id_usuario = ?";
  //     const [rows] = await db.query(sql, [id], [data]);
  //     return rows;
  //   },
  // hacer actualizaciopn deestado a inactivo ::
  // 1 autoamaticamente con esta fucnion "updateState"
  // 2 hacerlo desde la modal de editar
};