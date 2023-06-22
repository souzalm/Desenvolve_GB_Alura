const express = require("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");

const port=3030;
const address = "localhost";

//const utils = require("./utils");

//const faker = require("faker"); //modulo usado para criar dados fakes aleatorios para testes

global.users =[
    {id: uuid.v4, nome:"Ana Lúcia", sobrenome: "Mendes Paiva", datanascimento: new Date()},
    {nome:"Marcos Anderson", sobrenome: "Silva", datanascimento: new Date()},
    {nome:"Júlia", sobrenome: "Almeida Teixeira", datanascimento: new Date()}];

//ativa uso do EJS e do Express-ejs-layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false})); //prepara a aplicacao para receber dados na forma de query string
app.use(express.json()); //prepara a aplicacao para receber dados no formato JSON

//Criando usando rotas simples que estão no arquivo routes.js
app.use('/',routes);

//Criando um servidor simples com o Node.js e o Express

const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});