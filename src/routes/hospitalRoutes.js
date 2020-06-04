
const express = require('express')
// const path = require('path')
const hospitaisServices = require('../services/hospitaisService')

class HospitalRoutes {
    constructor() {
        this.app = express()
        this.routes()
    }

    routes() {
        this.app.get('/', (req, res) => {
            const { calculadoraHospital } = hospitaisServices
            const soma = calculadoraHospital()
            const obj = {
                helloworld: true,
                calculadora: soma
            }
            res.json(obj)
        })
    }
}

module.exports = new HospitalRoutes().app