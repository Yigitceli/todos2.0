const bcrypt = require('bcrypt');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'Yigitceli', password:bcrypt.hashSync('Orkun.33Orkun.33', 10), isAdmin: true}
      ]);
    });
};
