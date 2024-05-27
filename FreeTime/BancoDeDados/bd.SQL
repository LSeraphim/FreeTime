CREATE TABLE ContaUsuario (
	UsuarioId INT NOT NULL PRIMARY KEY,
    Email VARCHAR(50),
    Senha VARCHAR(16),
    NomeCompleto VARCHAR(200),
	NomeUsuario VARCHAR(25),
    EmailGoogle VARCHAR(50),
    Foto VARCHAR(200)
);

CREATE TABLE Titulos (
	TituloId INT NOT NULL PRIMARY KEY,
    NomeTitulo VARCHAR(60)
);

CREATE TABLE Videos (
	VideoId INT NOT NULL PRIMARY KEY,
    URL VARCHAR(60),
    Descricao VARCHAR (500),
    TituloVideo VARCHAR(100)
);

CREATE TABLE Niveis (
	LevelId INT NOT NULL PRIMARY KEY,
    UsuarioId INT,
    RequisitoXP INTEGER,
    NomeNivel VARCHAR(10),
    FOREIGN KEY (UsuarioId) REFERENCES ContaUsuario(UsuarioId)
);

CREATE TABLE Experiencia (
    UsuarioId INT NOT NULL,
    XP INTEGER,
    PRIMARY KEY (UsuarioId),
    FOREIGN KEY (UsuarioId) REFERENCES ContaUsuario(UsuarioId)
);

CREATE TABLE TituloUsuario (
    UsuarioId INT NOT NULL,
    TituloId INT NOT NULL,
    PRIMARY KEY (UsuarioId, TituloId),
    FOREIGN KEY (UsuarioId) REFERENCES ContaUsuario(UsuarioId),
    FOREIGN KEY (TituloId) REFERENCES Titulos(TituloId)
);
