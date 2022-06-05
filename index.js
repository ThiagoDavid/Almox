const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')
var mysql = require('mysql');

const port = 3000;
var path = require('path');
const { rmSync } = require('fs');
const app = express();

var logado = false;

// utilise acesso
app.use(session({secret:'asdfghjkl123456789'}));
app.use(bodyParser.urlencoded({extended:true}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname,'/views')); //caminho da interface
app.use(express.static('public')); // access to file

// rota post
app.post('/', (req, res)=>{   
    console.log("Post");
    var login = req.body.login;
    var password = req.body.password;
    var departamento = req.body.departamento;
    //buscar login    
    logar(login, password, departamento, res);
    //comparar senhas
})

function logar(login, password, departamento, res){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "S@fira159",
        database: "almox"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        //Escape the address value:
        var sql = 'SELECT * FROM funcionarios WHERE nome_funcionario = ?';
        con.query(sql, [login], function (err, result) {
            if (err) throw err;
            console.log("database created")
            //console.log("Result: " + result)
            const obj = result[0];
            if (obj.senha_funcionario == password){
                console.log("senha bate.")
                logado = true; 
                res.render('logado', {login:login});
            }                
            else { 
                logado = false;
                res.render('index');
            }
                
        });
    });
}

//rota get
app.get('/', (req, res)=>{/*
    if(req.session.login){
        res.render('logado',{login: login});
    } else {
        res.render('index');
    }*/
    res.render('index');
})


app.listen(port, ()=>{
    console.log('servidor rodando');
})