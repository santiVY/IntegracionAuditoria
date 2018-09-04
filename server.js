//Primer ejemplo
//var variable=require("IUSH"); 
//console.log(variable);

//Almacenar una libreria enuna variable(usar comando npm install express)
var express=require("express");
var app = express(); //app es una instancioa del objeto express
var path = require("path");//vanantes de listen



app.get("/",function(req,res){ //.get es un metodo el objeto en donde se le asignan diferentes parametros incluso otro tipo funcion
    res.send("Hola"); //se envia una respuesta
});


// obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
// Para que los archivos estaticos queden disponibles.
app.use(express.static("archivos"));


app.get("/index",function(req,res){ //.get es un metodo el objeto en donde se le asignan diferentes parametros incluso otro tipo funcion
    res.sendFile(
        path.join(
            __dirname, '/archivos/index.html'
        )
    ); 
});

app.get("/empresa",function(req,res){ 
    res.sendFile(
        path.join(
            __dirname, '/archivos/src/views/empresa.html'
        )
    ); 
});

app.get("/preguntas_seguridad",function(req,res){ 
    res.sendFile(
        path.join(
            __dirname, '/archivos/src/views/preguntas_seguridad.html'
        )
    ); 
});

app.get("/preguntas_gestion",function(req,res){ 
    res.sendFile(
        path.join(
            __dirname, '/archivos/src/views/preguntas_gestion.html'
        )
    ); 
});

app.get("/preguntas_control",function(req,res){ 
    res.sendFile(
        path.join(
            __dirname, '/archivos/src/views/preguntas_control.html'
        )
    ); 
});

app.get("/preguntas_adquisicion",function(req,res){ 
    res.sendFile(
        path.join(
            __dirname, '/archivos/src/views/preguntas_adquisicion.html'
        )
    ); 
});

app.listen(3000, function(){ //definirelpuerto 3000 para escuchar la app
    console.log("funcione!");
    //console.log(publicPath);
});
