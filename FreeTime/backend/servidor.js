const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 8081;

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'FreeTime'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL')
});

// Rota para Inserir um novo usuário

app.post('/registro', (req, res) => {
    const {email, senha, nomeCompleto, nomeUsuario, emailGoogle} = req.body;
    const sql = `INSERT INTO ContaUsuario (Email, Senha, NomeCompleto, NomeUsuario, EmailGoogle, Foto) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [email, senha, nomeCompleto, nomeUsuario, emailGoogle], (err, result) => {
        if (err) {
            console.error('Erro ao inserir usuario', err);
            res.status(500).send('Erro interno do servidor');
            return;
        }
        console.log('Usuário inserido com sucesso');
        res.status(200).send('Usuário registrado com sucesso');
    });
});

app.listen(port, () => {
console.log(`Servidor backend esta rodando em http://localhost:${port}`);
});