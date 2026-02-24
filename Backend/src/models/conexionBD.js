import mysql from "mysql2/promise";
let cnx;
try {
  cnx = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "hospital_db",
    port: "3306",
  });
  //   console.log(`conexion exitosa`);
} catch (error) {
  console.log(`A ocurrido un error en la conexion : ${error.massage}`);
}
export const db = cnx;
