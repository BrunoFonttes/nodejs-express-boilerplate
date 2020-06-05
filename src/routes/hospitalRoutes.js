
const express = require('express')
// const path = require('path')
const hospitalService = require('../services/hospitalService')

class HospitalRoutes {
    constructor() {
        this.app = express()
        this.routes()
    }

    routes() {
        this.app.get('/', (req, res) => {
            const { calculadoraHospital } = hospitalService
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