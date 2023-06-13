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
    
CREATE USER IF NOT EXISTS 'furia'@'localhost' IDENTIFIED BY 'super_furia';
GRANT INSERT , SELECT ON furia.* TO 'furia'@'localhost';

INSERT INTO usuario (nome, email, senha, fk_modalidade_favorita) VALUES
    ('João Silva', 'joao.silva@example.com', 'senha123', 1),
    ('Maria Santos', 'maria.santos@example.com', 'senha456', 2),
    ('Pedro Souza', 'pedro.souza@example.com', 'senha789', 3),
    ('Ana Oliveira', 'ana.oliveira@example.com', 'senhaabc', 1),
    ('Lucas Pereira', 'lucas.pereira@example.com', 'senha123', 4),
    ('Julia Costa', 'julia.costa@example.com', 'senha456', 2),
    ('Rafaela Almeida', 'rafaela.almeida@example.com', 'senha789', 3),
    ('Marcos Santos', 'marcos.santos@example.com', 'senhaabc', 1),
    ('Larissa Silva', 'larissa.silva@example.com', 'senha123', 5),
    ('Guilherme Souza', 'guilherme.souza@example.com', 'senha456', 2),
    ('Carolina Oliveira', 'carolina.oliveira@example.com', 'senha789', 3),
    ('Fernando Pereira', 'fernando.pereira@example.com', 'senhaabc', 1),
    ('Amanda Costa', 'amanda.costa@example.com', 'senha123', 4),
    ('Rodrigo Almeida', 'rodrigo.almeida@example.com', 'senha456', 2),
    ('Camila Santos', 'camila.santos@example.com', 'senha789', 3),
    ('Gustavo Silva', 'gustavo.silva@example.com', 'senhaabc', 1),
    ('Isabela Souza', 'isabela.souza@example.com', 'senha123', 5),
    ('Thiago Oliveira', 'thiago.oliveira@example.com', 'senha456', 2),
    ('Letícia Pereira', 'leticia.pereira@example.com', 'senha789', 3),
    ('Henrique Costa', 'henrique.costa@example.com', 'senhaabc', 1);

