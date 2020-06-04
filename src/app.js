const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const csurf = require('csurf')
const cors = require('cors')
const routes = require('./routes')
const verifyJWT = require('./middlewares/verifyJWT')
require('dotenv-safe').config()

const corsOptions =  require('./config/corsOptions')

class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(logger("dev"))
        this.app.use(cors(corsOptions))
        this.app.use(express.json())
        this.app.use(cookieParser())
    }

    routes() {
        this.app.use('/auth', require('./routes/authRoutes'))
        this.app.use('/api', verifyJWT, routes)
    }
}

module.exports = new App().app