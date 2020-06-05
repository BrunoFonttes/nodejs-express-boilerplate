const knex = require('knex')
const path = require('path')

const connection = knex({
    client: 'sqlite3',
    connection: path.resolve(__dirname, 'database.slite')
})

module.exports = { connection }