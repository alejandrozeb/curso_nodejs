const express = require('express'); //importamos la libreria en un objeto
const server = express(); //nos devuelve un objeto de tipo express, es una bstraccion
const fs = require('fs');   //cargamos la libreria file system

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
//RUTAS
/* server.get('/',(req,res)=>{
    res.write(home);    //mostramos la vista
}); */
///con funcion
server.get('/',getHomePage);//sin invocar la function espress la ejecutara
//el primer parametro es la ruta y el segun un callback con un request y un response    
server.get('/about',(req,res)=>{
    res.write(about);    //mostramos la vista
});


server.listen(8080, ()=>{
    //se ejecuta cuando el servidor inicializa
    console.log("Server is runnig on port"+8080);
    //el mensaje sale en la consola no en el navegador
})
//el mensaje del navegador es cannot get / donde sabemos que express ya esta corriendo, nos da por que no estamos manejando esa ruta
//podemos tenerlas en funciones
function getHomePage(req,res){
    return res.write(home);
}