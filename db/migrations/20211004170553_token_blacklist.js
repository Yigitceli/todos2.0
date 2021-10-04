
exports.up = function(knex) {
  return knex.schema.createTable('token_blacklist', table => {
      table.string("token_id").notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExist('token_blacklist');  
};
