const http = require('http');
const fs = require('fs');   //cargamos la libreria file system

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
http.createServer((request,response)=>{ 
    const {url} = request;
    //el objeto reuqest tiene una propiedad url
    if(url=== '/'){//si la url es igual a la raiz entonces se carga home
        response.writeHead(200,{"Content-type": "text/html"});
        response.write(home);//devolvemos el tipo de archivo
    } else if(url==="/about"){// si es igual a about
        response.writeHead(200,{"Content-type": "text/html"});
        response.write(about);//devolvemos el tipo de archivo
    }else{  //si no esta definida
        response.writeHead(404,{"Content-type": "text/html"});
        response.write("Page not found");
    }
    
    response.end(); //responde al cliente
}).listen(8080);
