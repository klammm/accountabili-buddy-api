
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercises').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercises').insert([
        {id: 1, type: 'Push ups'},
        {id: 2, type: 'Squats'},
        {id: 3, type: 'Sit ups'},
        {id: 4, type: 'Pull ups'}
      ]);
    })
    .then(()=>{
      return knex.raw("SELECT setval('exercises_id_seq', (SELECT MAX(id) FROM exercises))");
    });
};
