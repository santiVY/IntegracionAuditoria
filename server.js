//Primer ejemplo
//var variable=require("IUSH"); 
//console.log(variable);

//Almacenar una libreria enuna variable(usar comando npm install express)
var express=require("express");
var app = express(); //app es una instancioa del objeto express
var path = require("path");//vanantes de listen
var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "db_auditoria"
});

app.get("/empresa/get", function (req, res) {
    con.query("SELECT * FROM empresa", function (err, result, fields) {
        if (err) throw err;
        console.log(err);
        res.json(result);
    });
});

app.get("/",function(req,res){ //.get es un metodo el objeto en donde se le asignan diferentes parametros incluso otro tipo funcion
    res.send("Hola"); //se envia una respuesta
});


// obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
// Para que los archivos estaticos queden disponibles.
app.use(express.static("archivos"));


app.get("/index",function(req,res){ //.get es un metodo el objeto en donde se le asignan diferentes parametros incluso otro tipo funcion
    res.sendFile(
        path.join(
            __dirname, '/archivos/Index.html'
        )
    ); 
});

app.get("/empresa",function(req,res){ 
    res.sendFile(
        path.join(
            __dirname, '/archivos/src/views/Empresa.html'
        )
    ); 
});

app.get("/auditoria",function(req,res){ 
    res.sendFile(
        path.join(
            __dirname, '/archivos/src/views/Auditoria.html'
        )
    ); 
});

app.get("/preguntas",function(req,res){ 
    res.sendFile(
        path.join(
            __dirname, '/archivos/src/views/Preguntas.html'
        )
    ); 
});

app.get("/norma",function(req,res){ 
    res.sendFile(
        path.join(
            __dirname, '/archivos/src/views/Norma.html'
        )
    ); 
});


app.listen(3000, function(){ //definirelpuerto 3000 para escuchar la app
    console.log("funcione!");
    //console.log(publicPath);
});
