//configuracion de conteneder de injeccion de dependencias 

const {createContainer,asClass,asValue,asFunction} = require('awilix');
//{.., ayuda a injectar un on¡bjeto como clase, un objeto como un valor, injectar un objeto como una funcion  }

//importando servicioo
const {HomeService} = require('../services');
const container = createContainer();

//creamos un nuevo tipo de injeccion
container.register({
    HomeService: asClass(HomeService).singleton()
})

module.exports = container;