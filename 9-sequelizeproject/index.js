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
//sacamos el create
const entity = args[0].split(":")[1];
//sacamos el contact

switch(command){
    case CRUD.CREATE:
        //console.log('created!!');
        const data = {};
        args.slice(1).map((arg) => {
            const tmp = arg.split("=");
            data[tmp[0].substring(2)] = tmp[1];
        });

        console.log(data);
        db[entity].create(data)
        .then(() =>{console.log('Contact created!')})
        .catch(console.log);
        //insetarmos la data, devuelve una promesa
        break;
    case CRUD.READ:
        console.log('READ!!');
        db[entity].findAll()
        .then(console.log)
        .catch(console.log);
        break;
/*     case CRUD.CREATE:
        console.log('created!!');
        break;
    case CRUD.CREATE:
        console.log('created!!');
        break; */
    default:
        console.log('Operation not found!');
}
// --create:contact --firstname=alejandro