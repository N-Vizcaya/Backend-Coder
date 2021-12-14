const express = require("express");
const path = require("path");

const Contenedor = require("./Container.js");
const randomProd = require('./funcion.js')
const app = express();

const PORT = process.env.PORT || 8080;

const allProd = new Contenedor('productos.txt');

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", error => console.log(`error al iniciar servidor ${error}`));

server.on("error", error => console.log(`error al iniciar servidor ${error} `));

app.get("/", (req, res) => {
  res.send("Inicio del Proyecto de Backend");
});

app.get("/productos", (req, res) => {
  allProd
    .getAll()
    .then(data => {
      res.send(`producto: ${JSON.stringify(data)}`);
    })
    .catch(error => {
      throw error;
    });
  
});

app.get("/randomProd", (req, res) => {
  allProd
    .getById(randomProd())
    .then(data => {
      res.send(`Productos random: ${JSON.stringify(data)}`);
    })
    .catch(err => {
      throw err;
    });
});
