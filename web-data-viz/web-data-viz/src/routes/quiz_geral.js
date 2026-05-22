var express = require("express");
var router = express.Router();

var quiz_geralController = require("../controllers/quiz_geralController");


router.post("/salvarResultado", function (req, res){
    quiz_geralController.salvarResultado(req, res);
});

module.exports = router;