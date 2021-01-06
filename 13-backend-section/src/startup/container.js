
const {createContainer,asClass,asValue,asFunction} = require('awilix');
//{.., ayuda a injectar un on¡bjeto como clase, un objeto como un valor, injectar un objeto como una funcion  }
//  config variables de entorno
const config = require("../config");
const app = require(".");
//configuracion de conteneder de injeccion de dependencias 

//importando servicioo
const {HomeService} = require('../services');
//controllers
const {HomeController} = require("../controllers");

//routes
const {HomeRoutes} = require("../routes/index.routes");
const Routes = require('../routes');

//models
const {User, Comment, Idea} = require("../models");

//repositories

//container
const container = createContainer();


//creamos un nuevo tipo de injeccion
container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()    //a la hora de llamar un controlador express cambia de scope entonces esta linea nos permite usar el servicio sin qeu varie el scope
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    }).register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)
    });


module.exports = container;