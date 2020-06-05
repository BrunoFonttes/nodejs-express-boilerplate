
const express = require('express')

class Routes {
    constructor() {
        this.app = express()
        this.routes()
    }

    routes(){
        this.app.use('/hospitais', require('./hospitalRoutes'))
        this.app.use('/nlw', require('./nlwRoutes'))
    }
}

module.exports =  new Routes().app
