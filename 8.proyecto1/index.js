//entry point
//console.log("hello world!!!!");
const express = require("express");
const server = express();
//traemos la variable de entorno
const {PORT} = require("./config");
//imporatamos las rutas
const {HomeRoutes, QuotesRoutes} = require("./routes");
//importando middlewares
const {NotFoundMiddleware} = require("./middlewares");

server.use(express.static('./public'));   //para material publico en nuestra aplicacion
server.use(express.json());
//para recibir las peticiones como json

server.use("/", HomeRoutes);
server.use("/", QuotesRoutes);
//busca en homeruotes la t¡ruta / y responde con el controlador



//cuando busque eb todoas las rutas y no encuentre usamos el not found

server.use(NotFoundMiddleware);

server.listen(PORT, ()=>{
    console.log(`Aplication running on PORT ${PORT}`);
});