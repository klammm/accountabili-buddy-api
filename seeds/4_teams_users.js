
exports.seed = (knex) => {
  return knex('teams_users').del()
    .then(() => knex('teams_users').insert([
      {
        id: 1,
        user_id: 1,
        team_id: 1,
        primary_team: true
      },
      {
        id: 2,
        user_id: 2,
        team_id: 1,
        primary_team: true
      },
      {
        id: 3,
        user_id: 3,
        team_id: 1,
        primary_team: true
      },
      {
        id: 4,
        user_id: 4,
        team_id: 1,
        primary_team: true
      },
      {
        id: 5,
        user_id: 4,
        team_id: 2,
        primary_team: false
      },
      {
        id: 6,
        user_id: 4,
        team_id: 3,
        primary_team: false
      }
    ]))
    .then(() => knex.raw("SELECT setval('teams_users_id_seq', (SELECT MAX(id) FROM teams_users))")
  );
};
