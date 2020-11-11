const router = require("express").Router();
//es para que sea un enrutador de express
const {QuotesController} = require("../controllers");

router.get("/quotes", QuotesController.index);
router.get("/quotes/all", QuotesController.get);
router.post("/quotes", QuotesController.add);

module.exports = router;
