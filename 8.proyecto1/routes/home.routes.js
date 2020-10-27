const router = require("express").Router();
//es para que sea un enrutador de express
const {HomeController} = require("../controllers");
const homeController = require("../controllers/home.controller");
router.get("/", homeController.index);  //en esta ruta se ejecutara index
module.exports = router;