const express = require('express');
require("dotenv").config();

const { dbConnectionMySql } = require('../db/mySqlConnection');

class Server{

    constructor( ){
        this.app = express();
        this.port = process.env.PORT;
        this.connectionDb = null;
        this.pathRoutes = {
            flight: '/flights'
        }
        this.dbConnection();

        this.routes();
    }
    async dbConnection(){
        await dbConnectionMySql();
    }

    routes(){
        this.app.use( this.pathRoutes.flight, require('../routes/flight') );
    }

    listen(){
        this.app.listen( this.port, ()=> console.log(`Servidor escuchando en el puerto ${ this.port }`) );
    }
}

module.exports = Server;