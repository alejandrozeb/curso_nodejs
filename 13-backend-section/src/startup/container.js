//configuracion de conteneder de injeccion de dependencias 

const {createContainer,asClass,asValue,asFunction} = require('awilix');
//{.., ayuda a injectar un on¡bjeto como clase, un objeto como un valor, injectar un objeto como una funcion  }

//importando servicioo
const {HomeService} = require('../services');
//controllers
const {HomeController} = require("../controllers");

const container = createContainer();


//creamos un nuevo tipo de injeccion
container
    .register({
    HomeService: asClass(HomeService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()    //a la hora de llamar un controlador express cambia de scope entonces esta linea nos permite usar el servicio sin qeu varie el scope
    });

module.exports = container;