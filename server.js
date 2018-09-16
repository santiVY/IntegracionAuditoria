
//Almacenar una libreria enuna variable(usar comando npm install express)
var express = require("express");
var app = express(); //app es una instancia del objeto express
var path = require("path");//vanantes de listen
const mysql = require('mysql2');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('port', process.env.PORT || 3000);


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "123",
    database: 'auditoria'
});

app.get("/auditorias", function (req, res) {
    con.query('SELECT * FROM `auditoria`', function (err, result, fields) {
        if (err) throw err;
        console.log(err);
        res.json(result);
    });
});

app.get("/empresas", function (req, res) {
    con.query('SELECT * FROM `empresa`', function (err, result, fields) {
        if (err) throw err;
        console.log(err);
        res.json(result);
    });
});

app.post("/empresas", upload.array(), function (req, res, next) {
    console.log(req.body.nombre);
    con.query('INSERT INTO `empresa` (`nombre`, `nit`) VALUES("' + req.body.nombre + '",' + req.body.nit + ')', function (err, result, fields) {
        if (err) throw err;
        console.log(err);
        res.redirect('/index');
    });
});

app.get("/normas", function (req, res) {
    con.query('SELECT * FROM `norma`', function (err, result, fields) {
        if (err) throw err;
        console.log(err);
        res.json(result);
    });
});


app.post("/normas", upload.array(), function (req, res, next) {
    var norma = req.body.norma;
    console.log(norma);
    con.query('INSERT INTO `norma` (`nombre`) VALUES("' + norma + '")', function (err, result, fields) {
        if (err) throw err;
        console.log(err);
        res.redirect('/index');
    });

});

app.get("/preguntasAuditoria", function (req, res) {
    var norma = req.params.norma;
    con.query('SELECT * FROM pregunta as p INNER JOIN norma as n WHERE n.nombre ="ISO27001" and p.norma_idnorma = n.idnorma', function (err, result, fields) {
        if (err) throw err;
        console.log(err);
        res.json(result);
    });
});

app.get("/script.js", function (req, res) {
    res.sendFile(
        path.join(
            __dirname, '/archivos/js/script.js'
        )
    );
});


app.get("/", function (req, res) { //.get es un metodo el objeto en donde se le asignan diferentes parametros incluso otro tipo funcion
    res.send("Hola"); //se envia una respuesta
});


// obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
// Para que los archivos estaticos queden disponibles.
app.use(express.static("archivos"));

//---------Rutas de las vistas-------------
app.get("/index", function (req, res) { //.get es un metodo el objeto en donde se le asignan diferentes parametros incluso otro tipo funcion
    res.sendFile(
        path.join(
            __dirname, '/archivos/index.html'
        )
    );
});

app.get("/empresa", function (req, res) {
    res.sendFile(
        path.join(
            __dirname, '/archivos/src/views/Empresa.html'
        )
    );
});

app.get("/auditoria", function (req, res) {
    res.sendFile(
        path.join(
            __dirname, '/archivos/src/views/Auditoria.html'
        )
    );
});

app.get("/preguntas", function (req, res) {
    res.sendFile(
        path.join(
            __dirname, '/archivos/src/views/Preguntas.html'
        )
    );
});

app.get("/norma", function (req, res) {
    res.sendFile(
        path.join(
            __dirname, '/archivos/src/views/Norma.html'
        )
    );
});

//---------Fin de rutas de las vistas-------------


app.listen(3000, function () { //definirelpuerto 3000 para escuchar la app
    console.log("funcione!");
});
