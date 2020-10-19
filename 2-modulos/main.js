require('./logger');    //cargamos el archivo logger y ejecutamos ela rchivo main
/* require('./logger');
require('./logger');
require('./logger');
require('./logger'); */
/* cada vez que usamos un require nodejs lo carga en cache entonces colocar dos veces no afecta, esto es un patron de diseño llamado singleton, cada vez que hacemos un require es solo una instacia */

const logger = require("./logger");
//cuando tenemos solo una funcion en logger o nuestro modulo no se ejecutara nada por que no es codigo plano entonces debemos exportar el modulo
//logger('alejandro');
//podemos ver que logger tiene todas la propiedades de nodejs
 
console.log(logger);
//mostramos que propiedas tiene logger que contiene nuestro modulo
const {greet,number} = require("./logger");
//entondes podemos destruccion con nuestro objeto, es acceder a la propiedad directamente
greet('Alejandro2');
//para usar esa propiedad
console.log(number);
