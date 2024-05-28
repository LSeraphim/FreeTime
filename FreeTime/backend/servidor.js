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