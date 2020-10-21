const http = require('http');
const fs = require('fs');   //cargamos la libreria file system

const html = fs.readFileSync('./index.html');   //cargamos el html
http.createServer((request,response)=>{ 
    response.writeHead(200,{"Content-type": "text/html"});
    //pasamos la cabezera 200 especificamos el contenido que se va a devolver que ya estan predefinidos
    response.write(html);//devolvemos el tipo de archivo
    response.end(); 
}).listen(8080);

//para enviar un archivo podemos usar el filesystem de nodejs
//podemos ver en network que se devuelve un html