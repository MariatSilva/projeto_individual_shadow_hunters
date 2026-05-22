var quiz_geralModel = require("../models/quiz_geralModel");


function salvarResultado(req, res) {
    let id_usuario = req.body.idUsuarioServer;
    let id_quiz = req.body.idQuizServer;
    let qtd_pontos = req.body.respCorretasServer;


    if (id_usuario == undefined) {
        res.status(400).send("Usuário está undefined!");
    } else if (id_quiz == undefined) {
        res.status(400).send("Quiz está indefinida!");
    }else if (qtd_pontos == undefined) {
        res.status(400).send("A quantidade de pontos está indefinida!");
    } else {

        quiz_geralModel.salvarResultado(id_usuario, id_quiz, qtd_pontos)
        .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {

    salvarResultado
};