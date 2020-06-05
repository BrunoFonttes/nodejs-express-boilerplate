const express = require('express')
// const path = require('path')
const nlwService = require('../services/nlwService')

class NlwRoutes {
    constructor(){
        this.express = express()
    }
}

module.exports = new NlwRoutes().express