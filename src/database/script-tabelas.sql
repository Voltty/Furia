CREATE DATABASE furia;
USE furia;

CREATE TABLE modalidade (
	id_modalidade INT PRIMARY KEY AUTO_INCREMENT,
    modalidade VARCHAR(45)
);

CREATE TABLE usuario (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(100),
    senha VARCHAR(20),
    fk_modalidade_favorita INT,
    CONSTRAINT fk_modalidade_usuario FOREIGN KEY (fk_modalidade_favorita) REFERENCES modalidade(id_modalidade)
);

CREATE TABLE partidas (
	id_partida INT NOT NULL,
    fk_modalidade INT NOT NULL,
    data_inicio DATE NOT NULL,
    horario_inicio TIME NOT NULL,
    time_1 VARCHAR(45) NOT NULL,
    time_2 VARCHAR(45)NOT NULL,
    mapa_1 VARCHAR(45) NOT NULL,
    mapa_2 VARCHAR(45),
    mapa_3 VARCHAR(45),
    pontuacao_1 INT NOT NULL,
    pontuacao_2 INT,
    pontuacao_3 INT,
    CONSTRAINT fk_modalidade_patidas FOREIGN KEY (fk_modalidade) REFERENCES modalidade(id_modalidade),
    CONSTRAINT pk_modalidade_partidas PRIMARY KEY (fk_modalidade,id_partida)
);

INSERT INTO modalidade VALUES 
	(null,'CS:GO'),
    (null,'Valorant'),
    (null,'Rocket League'),
    (null,'Apex'),
    (null,'LOL');