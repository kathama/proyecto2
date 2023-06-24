const express = require("express");

const { programacion } = require("../datos/cursos.js").infoCursos;

const routerProgramacion = express.Router();

routerProgramacion.get("/", (req, res) => {
  res.send(JSON.stringify(programacion));
});

routerProgramacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  res.send(JSON.stringify(resultados));
});

module.exports = routerProgramacion;
