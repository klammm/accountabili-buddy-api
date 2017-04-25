exports.up = knex => knex.schema.createTable('teams', (table) => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('teams');
