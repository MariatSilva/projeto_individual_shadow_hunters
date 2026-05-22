var database = require("../database/config")


function salvarResultado(id_usuario, id_quiz, qtd_pontos){
    //SALVANDO DADOS DO QUIZ GERAL NO BANCO DE DADOS

     var instrucaoSql = `
            INSERT INTO usuario_quiz_geral (fk_usuario, fk_quiz_geral, total_pontos) VALUES ('${id_usuario}', '${id_quiz}', '${qtd_pontos}');
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

module.exports = {

    salvarResultado
};