exports.up = knex => knex.schema.createTable('events', (table) => {
  table.increments('id').primary();
  table.integer('image_id').notNullable().references('id').inTable('images');
  table.integer('user_id').notNullable().references('id').inTable('users');
  table.integer('exercise_id').notNullable().references('id').inTable('exercises');
  table.integer('reps').notNullable();
  table.boolean('logged_results').defaultTo('false');
  table.timestamps(true, true);
  table.integer('team_id').nullable().references('id').inTable('teams');
});

exports.down = knex => knex.schema.dropTable('events');
