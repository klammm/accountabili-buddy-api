exports.up = knex => knex.schema.createTable('images', (table) => {
  table.increments('id').primary();
  table.integer('users_id').notNullable().references('id').inTable('users');
  table.text('caption').defaultTo('');
  table.string('imageUrl').notNullable();
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('images');
