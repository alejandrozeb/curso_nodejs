//configuracion de conteneder de injeccion de dependencias 

const {createContainer,asClass,asValue,asFunction} = require('awilix');
//{.., ayuda a injectar un on¡bjeto como clase, un objeto como un valor, injectar un objeto como una funcion  }

const container = createContainer();

module.exports = container;