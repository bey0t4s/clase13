const express = require('express');

//2 Ejecuto las funciones de express en la variable
const app = express();

const mysql = require('mysql2'); 

const PORT = 3001;

//4 Respuesta al cliente (frontend)
  app.get('/', (req, res)=> {
    res.send(`<h1>Bienvenido a mi sitio<\h1>`)
  });

  app.get('/home', (req, res)=> {
    //console.log(res);
    console.log(req.url);
    console.log(req.method);
    res.send(`<h1>Hiciste click en home<\h1>`)
  });  

  app.get('/datos', (req,res) =>{
    res.json({usuario: "amy", dni:1234, orden:true})
  });


  app.get('/index', (req,res) =>{ 
    res.sendFile('/public/index.html')
  });

  const conexion = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'c0m03nc4s4'
}
);

conexion.connect((error)=>{
if(error){
    console.log(`El error es: ${error}`)
}
else
{
    console.log("Conectado a la base de datos");
}

});

app.listen(PORT, ()=> {
console.log(`Servidor trabajando en el puerto ${PORT}`)
});


