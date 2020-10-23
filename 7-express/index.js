const express = require('express'); //importamos la libreria en un objeto
const server = express(); //nos devuelve un objeto de tipo express, es una bstraccion

server.listen(8080, ()=>{
    //se ejecuta cuando el servidor inicializa
    console.log("Server is runnig on port"+8080);
    //el mensaje sale en la consola no en el navegador
})
//el mensaje del navegador es cannot get / donde sabemos que express ya esta corriendo, nos da por que no estamos manejando esa ruta