CREATE DATABASE FreeTime;

USE FreeTime;

CREATE TABLE ContaUsuario (
	usuarioId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50),
    senha VARCHAR(16),
    nomeCompleto VARCHAR(200),
	nomeUsuario VARCHAR(25)
);

CREATE TABLE Titulos (
	tituloId INT NOT NULL PRIMARY KEY,
    nomeTitulo VARCHAR(60)
);

CREATE TABLE Videos (
	videoId INT NOT NULL PRIMARY KEY,
    URL VARCHAR(60),
    descricao VARCHAR (500),
    tituloVideo VARCHAR(100)
);

CREATE TABLE Niveis (
	niveisId INT NOT NULL PRIMARY KEY,
    usuarioId INT,
    requisitoXP INTEGER,
    nomeNivel VARCHAR(10),
    FOREIGN KEY (UsuarioId) REFERENCES ContaUsuario(UsuarioId)
);

CREATE TABLE Experiencia (
    usuarioId INT NOT NULL,
    XP INTEGER,
    PRIMARY KEY (UsuarioId),
    FOREIGN KEY (UsuarioId) REFERENCES ContaUsuario(UsuarioId)
);

CREATE TABLE TituloUsuario (
    usuarioId INT NOT NULL,
    tituloId INT NOT NULL,
    PRIMARY KEY (UsuarioId, TituloId),
    FOREIGN KEY (UsuarioId) REFERENCES ContaUsuario(UsuarioId),
    FOREIGN KEY (TituloId) REFERENCES Titulos(TituloId)
);
