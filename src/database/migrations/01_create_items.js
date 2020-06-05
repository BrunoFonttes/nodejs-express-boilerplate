
async function up(knex) {
    return knex.schema.createTable('items', table=>{
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('title').notNullable()
    })
}

async function down(knex) {
    return knex.schema.dropTable('items')
}

module.exports = { up, down }
