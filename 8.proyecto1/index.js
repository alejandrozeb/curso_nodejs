//entry point
//console.log("hello world!!!!");
const express = require("express");
const server = express();
//traemos la variable de entorno
const {PORT} = require("./config");
server.listen(PORT, ()=>{
    console.log(`Aplication running on PORT ${PORT}`);
});