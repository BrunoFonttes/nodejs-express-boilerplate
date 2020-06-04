const express = require('express')
const authService = require('../services/authService')
const jwt = require('jsonwebtoken')

class authRoutes {
    constructor() {
        this.app = express()
        this.routes()
    }
    routes() {
        this.app.use('/login', (req, res) => {
            const { login } = authService
            const { user, password } = req.query
            const id = login(user, password)
            if (id != -1) {
                const token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 300
                })
                res.status(200).cookie('token', token).json({ auth: true, token: token })
            }
            res.status(500).json('Login inválido!') 
        })
        this.app.use('/logout', (req, res)=>{
            res.status(200).cookie('token', null).json({auth:false, token: null})
        })
    }
}

module.exports = new authRoutes().app