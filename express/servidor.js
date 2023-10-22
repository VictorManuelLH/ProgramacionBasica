var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado) {
    resultado.send("Que onda<strong>No lea esto</strong>");
}

function cursos(peticion, resultado) {
    resultado.send("Esto es <strong>Express</strong>");
}

aplicacion.listen(8989);