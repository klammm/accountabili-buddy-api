const Bookshelf = require('../bookshelf');

require('./users');
require('./users_exercises_images');


const Exercises = Bookshelf.Model.extend({
  tableName: 'exercises',
  users: () => this.belongsToMany('Users').through('UsersExercisesImages')
});

module.exports = Bookshelf.model('Exercises', Exercises);
