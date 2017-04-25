const Bookshelf = require('../bookshelf');

require('./teams');
require('./users_teams');
require('./images');
require('./exercises');
require('./users_exercises_images');

const Users = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  teams: () => this.belongsToMany('Teams').through('UsersTeams'),
  images: () => this.hasMany('Images'),
  exercises: () => this.belongsToMany('Exercises').through('UsersExercisesImages'),
  // usersExercisesImages: () => this.hasMany('UsersExercisesImages')
});

module.exports = Bookshelf.model('Users', Users);
