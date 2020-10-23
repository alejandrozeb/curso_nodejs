//es simple como crear los paquetes nativos de js

const http = require('http');

http.createServer((request,response)=>{ 
    response.write("Hello World!!");
    response.end(); //terminamos y enviamos
}).listen(8080);
//pasamos un callbaxk,ademas pasamos un puerto donde se escuvha el servidor
//cuando ejecutamos en consola notamos que no se cierra el comando paramos la  con crtl +c
//http://localhost:8080/