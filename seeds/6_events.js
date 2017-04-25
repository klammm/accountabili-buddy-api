
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          image_id: 1,
          user_id: 1,
          exercise_id: 1,
          reps: 20,
          logged_results: true,
          team_id: 1,
          created_at: new Date('2017-04-24 10:22:16 UTC'),
          updated_at: new Date('2017-04-24 10:22:16 UTC')
        },
        {
          id: 2,
          image_id: 1,
          user_id: 2,
          exercise_id: 1,
          reps: 30,
          logged_results: true,
          team_id: 1,
          created_at: new Date('2017-04-24 10:22:16 UTC'),
          updated_at: new Date('2017-04-24 10:22:16 UTC')
        },
        {
          id: 3,
          image_id: 1,
          user_id: 2,
          exercise_id: 2,
          reps: 30,
          logged_results: true,
          team_id: 1,
          created_at: new Date('2017-04-24 10:22:16 UTC'),
          updated_at: new Date('2017-04-24 10:22:16 UTC')
        },
        {
          id: 4,
          image_id: 1,
          user_id: 3,
          exercise_id: 1,
          reps: 40,
          logged_results: true,
          team_id: 1,
          created_at: new Date('2017-04-24 10:22:16 UTC'),
          updated_at: new Date('2017-04-24 10:22:16 UTC')
        },
        {
          id: 5,
          image_id: 1,
          user_id: 4,
          exercise_id: 1,
          reps: 60,
          logged_results: true,
          team_id: 1,
          created_at: new Date('2017-04-24 10:22:16 UTC'),
          updated_at: new Date('2017-04-24 10:22:16 UTC')
        },
      ]);
    })
    .then(()=>{
      return knex.raw("SELECT setval('events_id_seq', (SELECT MAX(id) FROM events))");
    });
};
