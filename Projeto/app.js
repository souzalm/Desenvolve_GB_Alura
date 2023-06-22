const express = require(express);
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const uuid = require('uuid');
const app = express();

const port = 3000;
const address = "localhost";

//Template ENGINE:
app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Pessoas GLOBAL:
global.users =[
    {id: uuid.v4, nome:"Ana Lúcia", sobrenome: "Mendes Paiva", datanascimento: new Date(2020-01-01)},
    {id: uuid.v4, nome:"Marcos Anderson", sobrenome: "Silva", datanascimento: new Date(1950-07-07)},
    {id: uuid.v4, nome:"Júlia", sobrenome: "Almeida Teixeira", datanascimento: new Date(1988-10-13)}
];

//Routes e Templates:
app.get("/", function(req, res){
    res.render('index');
})

app.post('/criar',(req,res)=>{
    
    let pessoa = {id:"",nome:"",sobrenome:"",datanascimento:""};

    pessoa.id = uuid.v4;
    pessoa.nome = req.body._nome;
    pessoa.sobrenome = req.body._sobrenome;
    pessoa.datanascimento = req.body._datanascimento;


    users.push(user);
    console.log("Usuário cadastrado: ",user);
    console.log("Lista dos usuários: ",users);
    res.render('layouts/cadastro-pessoa'); 

});

// Iniciar SERVIDOR:
const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log("Servidor executando no endereço ${host} e porta ${port}");
});