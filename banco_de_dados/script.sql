CREATE DATABASE shadow_hunters;
USE shadow_hunters;

CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (150),
    email VARCHAR (120),
    senha VARCHAR (30),
    dt_cadastro DATE DEFAULT(CURRENT_DATE)
);

SELECT * FROM usuario;	

TRUNCATE TABLE usuario;