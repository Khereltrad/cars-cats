const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const gatos = [
    {
        id: 400,
        nombre: "La chape con guantes",
        descripcion: "indica que el servidor no puede o no procesará la petición debido a algo que es percibido como un error del cliente"
    },
    {
        id: 402,
        nombre: "Avaricia",
        descripcion: "Indica que es en este caso puntual, es necesario realizar un pago al dueño de la web para poder ingresar al contenido de la misma"
    },
    {
        id: 417,
        nombre: "Pelusa",
        descripcion: "Este error se produce cuando la solicitud de HTTP POST no puede procesarse. Esto, generalmente, se debe a que la sintaxis bien de PHP o bien de cURL, o incluso la sintaxis de ambas, no es correctas"
    },
    {
        id: 422,
        nombre: "Trapito",
        descripcion: "Aparece cuando los contenidos tienen algún error semántico que impide al servidor responder a la petición del navegador aunque tenga un formato correcto"
    },
    {
        id: 509,
        nombre: "Muchos Ñaus",
        descripcion: "Significa que se ha excedido en el Ancho de banda asignado 'trafico mensual' y el dominio ha sido suspendido por el sistema, para reactivarlo la solución definitiva es ampliarse a un plan mayor que le otorge mas trafico a su sitio"
    },
    {
        id: 599,
        nombre: "Pesadilla",
        descripcion: "Sucede cuando el servidor falla por motivos 'desconocidos' como desconecciones y similares"
    }
];

app.get("/cats", (req, res) => {
    res.render("gatos",{gatos :gatos});
});

app.get("/cars", (req, res) => {
    res.render("cars");
});

app.get("/cars/new", (req, res) => {
    res.render("form");
});

app.get("/detalle", (req, res) => {
    console.log({gato:gatos[0]});
    res.render("detalle",{gato:gatos[1]});
});


app.get("/:codigo",(req,res) =>{
    let gatoerror ;
    const codigo = req.params.codigo;
     
    for(const gato of gatos){
        if(codigo == gato.id){
            gatoerror = gato;
        }
    }
    if(gatoerror == undefined){
        res.json({ message: "Gato no encontrado!" });
    }
    else
    res.render("detalle",{gato:gatoerror});
});

app.listen(port, () => console.log(`Listening on port: ${port}`));

