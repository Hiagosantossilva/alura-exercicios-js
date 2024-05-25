const express = require("express");
const app = express();

//Rotas - O que são?

    //Método HTTP - Crud (create, read, update, delete)
        // GET - pega uma info
        // POST - cria uma info
        // PUT - altera toda a info
        // PATH - altera parte da info 
    
    //Name - Um identificador da rota
    
    // Function (callback) - responsável por executar algum comando

//Rotas - exemplo:

    // app.get(); -> com método http
    // app.get("/route"); -> com nome e método http
    // app.get("/route", (res, req) => {}); -> com método http, name e function


app.get("/soma", (req, res) => {
    const soma = 1+1;

    res.json (soma)

})

app.listen(3000);

