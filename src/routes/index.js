
const express = require('express')

class Routes {
    constructor() {
        this.app = express()
        this.routes()
    }

    routes(){
        this.app.use('/hospitais', require('./hospitalRoutes'))
    }
}

module.exports =  new Routes().app
