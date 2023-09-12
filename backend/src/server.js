const express = require('express');
const { connection } = require('./database/connection');
const routes = require('./routes');
const cors = require('cors');

class Server {
    constructor( server = express())
    {
        this.middlewares(server)
        this.database()
        this.allRoutes(server)
        this.initializeServer(server)
    }

    async middlewares(app) {
        app.use(cors())
        app.use(express.json())
    }

    async database() {
        try {
            await connection.authenticate()
            console.log('Conectado com sucesso!!');
        } catch (error) {
            console.error('Não foi possível estabelecer uma conexão!', error);
        }
    }

    async initializeServer(app) {
        const PORT = 3333
        app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
    }

    async allRoutes(app) {
        app.use(routes)
    }

}

module.exports = { Server }
