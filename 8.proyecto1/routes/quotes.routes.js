const router = require("express").Router();
//es para que sea un enrutador de express
const {QuotesController} = require("../controllers");

router.get("/quotes", QuotesController.index);

module.exports = router;
