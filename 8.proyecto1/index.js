//entry point
//console.log("hello world!!!!");
const express = require("express");
const server = express();
//traemos la variable de entorno
const {PORT} = require("./config");

server.use(express.static('./public'));   //para material publico en nuestra aplicacion
server.use(express.json());
//para recibir las peticiones como json
server.listen(PORT, ()=>{
    console.log(`Aplication running on PORT ${PORT}`);
});