const express = require("express");
const api = express();

const { infoCursos } = require("./datos/cursos");

// Routers
const routerProgramacion = require("./routers/programacion.js");
api.use("/api/cursos/programacion", routerProgramacion);

const routerMatematicas = require("./routers/matematicas.js");
api.use("/api/cursos/matematicas", routerMatematicas);

console.log(infoCursos);

api.get("/", (req, res) => {
  res.send("Mi primer servidor. cursos.");
});

api.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

const PUERTO = process.env.PORT || 3000;

api.listen(PUERTO, () => {
  console.log(`El servidor es escuchando en el puerto ${PUERTO}...`);
});

