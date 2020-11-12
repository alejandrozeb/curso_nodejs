const {CRUD} = require("./helpers");
const db= require("./models");
//cada comando se almacena en un obheto params
const params = process.argv; //consola
//console.log(params);    //cmo vemos en la consola podemos capturar que pasamos por consola 

if(params.length <= 2){
    process.exit(0);    //para el programa
}

const args = params.slice(2);   //a partir de la 2da pocision

const command = args[0].split(":")[0].substring(2);
console.log(command2);
//sacamos el create
const entity = args[0].split(":")[1];
//sacamos el contact

switch(command){
    case CRUD.CREATE:
        console.log('created!!');
        break;
    default:
        console.log('Operation not found!');
}
// --create:contact --firstname=alejandro