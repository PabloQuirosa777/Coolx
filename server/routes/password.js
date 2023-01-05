var express = require("express");
var router = express.Router();
var passwordControler = require('../controllers/passwordControler')

router.post("/", passwordControler.sendMail)


module.exports = router;