const { Router } = require("express");

module.exports = function({ HomeController }){
    const router = Router();

    router.get("/", HomeController.index);
    //el scope es del express, pero con la injeccoin de depedendencia podemos usar nuestro servicio

    return router;
};