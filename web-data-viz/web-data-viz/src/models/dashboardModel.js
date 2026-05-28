var database = require("../database/config");

function buscarQtdRespostasTotais() {
    var instrucaoSql = `
        SELECT 
        COUNT(*) AS qtd_respostas
        FROM usuario_quiz_geral;
    `
    return database.executar(instrucaoSql);
}

function buscarMediaPontosResposta() {
    var instrucaoSql = `
      SELECT 
ROUND(AVG(total_pontos), 1) AS media_pontos_totais
FROM usuario_quiz_geral;
    `
    return database.executar(instrucaoSql);
}

function buscarQtdRespostasAteCinco() {
    var instrucaoSql = `
        
SELECT 
COUNT(*) AS total_resp_ate_cinco
FROM usuario_quiz_geral
WHERE total_pontos <=5;

    `
    return database.executar(instrucaoSql);
}

function buscarQtdRespostasAcimaCinco() {
    var instrucaoSql = `
   SELECT 
COUNT(*) AS total_resp_acima_cinco
FROM usuario_quiz_geral
WHERE total_pontos > 5;

    `
    return database.executar(instrucaoSql);
}


function buscarQtdRespostaPorPontos() {
    var instrucaoSql = `
SELECT
total_pontos,
COUNT(*) AS qtd_respostas
FROM usuario_quiz_geral
GROUP BY total_pontos
ORDER BY total_pontos;


    `
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarQtdRespostasTotais,
    buscarMediaPontosResposta,
    buscarQtdRespostasAteCinco,
    buscarQtdRespostasAcimaCinco,
    buscarQtdRespostaPorPontos
}
