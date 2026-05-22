-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE shadow_hunters;
USE shadow_hunters;

CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (150),
    email VARCHAR (120) UNIQUE NOT NULL,
    senha VARCHAR (200) NOT NULL,
    dt_cadastro DATE DEFAULT(CURRENT_DATE)
);


CREATE TABLE quiz_geral(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome_quiz VARCHAR (200)
);

CREATE TABLE usuario_quiz_geral(
	id INT PRIMARY KEY AUTO_INCREMENT,
	fk_usuario INT,
    fk_quiz_geral INT,
    
    CONSTRAINT ct_fk_usario
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    
     CONSTRAINT ct_fk_quiz_geral
    FOREIGN KEY (fk_quiz_geral) REFERENCES quiz_geral(id),
    
   
    dt_quiz_realizado DATE DEFAULT (CURRENT_DATE),
    total_pontos INT
);

INSERT quiz_geral (nome_quiz)VALUES
('Quiz de conhecimentos gerais');


SELECT * FROM usuario;	

SELECT * FROM quiz_geral;

SELECT * FROM usuario_quiz_geral;	
	
