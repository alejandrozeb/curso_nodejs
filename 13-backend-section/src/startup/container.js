
const {createContainer,asClass,asValue,asFunction} = require('awilix');
//{.., ayuda a injectar un on¡bjeto como clase, un objeto como un valor, injectar un objeto como una funcion  }
//  config variables de entorno
const config = require("../config");
const app = require(".");
//configuracion de conteneder de injeccion de dependencias 

//importando servicioo
const {
    HomeService,
    CommentService,
    IdeaService,
    UserService,
    AuthService
} = require('../services');
//controllers
const {
    HomeController,
    CommentController,
    IdeaController,
    UserController,
    AuthController
} = require("../controllers");

//routes
const {
    HomeRoutes,
    CommentRoutes,
    IdeaRoutes,
    UserRoutes
} = require("../routes/index.routes");
const Routes = require('../routes');

//models
const {User, Comment, Idea} = require("../models");

//repositories
const {CommentRepository,IdeaRepository,UserRepository} = require("../repositories");

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
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton(),
        CommentService: asClass(CommentService).singleton(),
        IdeaService: asClass(IdeaService).singleton(),
        AuthService: asClass(AuthService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),    //a la hora de llamar un controlador express cambia de scope entonces esta linea nos permite usar el servicio sin qeu varie el scope
        UserController: asClass(UserController.bind(UserController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton(),
        AuthController: asClass(AuthController.bind(AuthController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton(),
        IdeaRoutes: asFunction(IdeaRoutes).singleton(),
        CommentRoutes: asFunction(CommentRoutes).singleton()
    }).register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)
    }).register({
        UserRepository: asClass(UserRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton()
    });


module.exports = container;