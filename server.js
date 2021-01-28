const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname+"/public"));

app.get("/cats",(req,res) =>{
    res.render("gatos");
});

app.get("/cars",(req,res) =>{
    res.render("vehiculos");
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );