const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let contaUsuario=models.ContaUsuario;

app.post('/login', (req,res)=>{
    console.log(req.body);
});

let port= process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando!');
});