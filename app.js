const express = require("express");
const bodyParser = require("body-parser");
const { API_VERSION } = require("./config");
const app = express();

//aqui cargamos las rutas
//.....

//configuracion del body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configuracion de los header de http
//...

//rutas basicas
//...

module.exports = app;
