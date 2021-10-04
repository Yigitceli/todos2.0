
exports.up = async function(knex) {
  return await knex.schema.createTable('todos',function(table){
      table.increments('id').primary();
      table.string('todo').notNullable();
      table.integer('user_id').references('id').inTable('users');      
  })
};

exports.down = async function(knex) {
    return await knex.schema.dropTableIfExists('todos');
  
};
