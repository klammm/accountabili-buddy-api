exports.up = knex => knex.schema.createTable('exercises', (table) => {
  table.increments('id').primary();
  table.string('type').notNullable();
});

exports.down = knex => knex.schema.dropTable('exercises');
