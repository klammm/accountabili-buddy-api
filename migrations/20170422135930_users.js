exports.up = knex => knex.schema.createTable('users', (table) => {
  table.increments('id').primary();
  table.string('user_name').notNullable();
  table.string('first_name').notNullable();
  table.string('last_name').notNullable();
  table.string('email').notNullable().unique();
  table.specificType('hashed_password', 'char(60)').notNullable();
});

exports.down = knex => knex.schema.dropTable('users');
