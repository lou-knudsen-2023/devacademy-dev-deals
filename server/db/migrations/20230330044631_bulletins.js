/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('bulletins', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('date')
    table.string('description')
    table.integer('phone')
    table.string('image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('bulletins')
}
