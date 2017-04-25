const Bookshelf = require('../bookshelf');

require('./teams');
require('./images');
require('./exercises');
require('./users');

const UsersExercisesImages = Bookshelf.Model.extend({
  tableName: 'users_exercises_images',
  hasTimestamps: true,
  team: () => this.belongsToMany('Teams'), // ????
  image: () => this.hasMany('Images'),
  exercise: () => this.hasMany('Exercises'),
  user: () => this.hasMany('Users')
});

module.exports = Bookshelf.model('UsersExercisesImages', UsersExercisesImages);
