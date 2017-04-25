const Bookshelf = require('../bookshelf');

require('./teams');
require('./users');

const UsersTeams = Bookshelf.Model.extend({
  tableName: 'users_teams',
  hasTimestamps: true,
  teams: () => this.hasMany('Teams'),
  users: () => this.hasMany('Users')
});

module.exports = Bookshelf.model('UsersTeams', UsersTeams);
