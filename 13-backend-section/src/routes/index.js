//router principal, encargado del middleware principal

const express = require("express");
const cors = require("cors");
const  helmet= require("helmet");
const  compression= require("compression");
require("express-async-errors");
const {ErrorMiddleware,NotFoundMiddleware} = require("../middlewares");

module.exports = function({
    HomeRoutes,
    UserRoutes,
    IdeaRoutes,
    CommentRoutes,
    AuthRoutes
}) {
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
    .use(express.json())//bug 
    .use(cors())
    .use(helmet())
    .use(compression());
    //estos son los iddlewares que se ejecutan al principio default

    apiRoutes.use("/home", HomeRoutes);
    apiRoutes.use("/user", UserRoutes);
    apiRoutes.use("/idea", IdeaRoutes);
    apiRoutes.use("/comment", CommentRoutes);
    apiRoutes.use("/auth", AuthRoutes);

    router.use("/v1/api", apiRoutes);
    //todas las rutas van a tener v1/api
    //escalabilidad configurada

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);
    return router;
};



