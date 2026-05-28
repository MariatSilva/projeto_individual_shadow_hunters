var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController.js")

router.get("/qtdRespostas", function(req, res){
    dashboardController.buscarQtdRespostasTotais(req, res)
})

router.get("/MediaRespostas", function(req, res){
    dashboardController.buscarMediaPontosResposta(req, res)
})
router.get("/qtdRespostasAteCinco", function(req, res){
    dashboardController.buscarQtdRespostasAteCinco(req, res)
})
router.get("/qtdRespostasAcimaCinco", function(req, res){
    dashboardController.buscarQtdRespostasAcimaCinco(req, res)
})
router.get("/quiz_grafico1", function(req, res){
    dashboardController.buscarQtdRespostaPorPontos(req, res)
})



module.exports = router;