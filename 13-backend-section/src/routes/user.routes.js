const { Router } = require("express");
const {AuthMiddleware, ParseIntMiddleware} = require("../middlewares");
const authMiddleware = require("../middlewares/auth.middleware");
module.exports = function({ UserController }){
    const router = Router();

    router.get("/",[AuthMiddleware,ParseIntMiddleware],UserController.getAll);
    router.get("/:userId", UserController.get);
    router.patch("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);
    return router;
    //podemos colocar los middlewares como []
};