const express = require("express");
const app = express();
const port = 8000;

//^ esta es la línea que le dice a nuestro servidor que use la carpeta "/ static" para contenido estático
app.use(express.static(__dirname+"/public"));

//? EJS
//^ Esto establece la ubicación donde express buscará la vista ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.get("/cats",(req,res) =>{
    res.render("gatos");
});

app.get("/cars",(req,res) =>{
    res.render("cars");
});

app.get("/cars/new",(req,res) =>{
    res.render("form");
});

app.get("/detalle",(req,res) =>{
    res.render("detalle");
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );

