
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {
          id: 1,
          users_id: 1,
          caption: 'Woooo pushup hour at the gSchool',
          imageUrl: 'http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg',
          created_at: new Date('2017-04-24 10:23:16 UTC'),
          updated_at: new Date('2017-04-24 10:23:16 UTC')
        },
        {
          id: 2,
          users_id: 2,
          caption: 'Kevin is a tank',
          imageUrl: 'http://www.tanks-encyclopedia.com/modern/Italy/Ariete/Ariete-C1.png',
          created_at: new Date('2017-04-24 10:23:16 UTC'),
          updated_at: new Date('2017-04-24 10:23:16 UTC')
        },
        {
          id: 3,
          users_id: 3,
          caption: 'Paola is crossfit Queen',
          imageUrl: 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
          created_at: new Date('2017-04-24 10:23:16 UTC'),
          updated_at: new Date('2017-04-24 10:23:16 UTC')
        }
      ]);
    })
    .then(()=>{
      return knex.raw("SELECT setval('images_id_seq', (SELECT MAX(id) FROM images))");
    });
};
