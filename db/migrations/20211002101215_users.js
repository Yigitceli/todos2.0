
exports.up = async function(knex) {
    return await knex.schema.createTable('users',function(table){
        table.increments('id').primary();
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
        table.boolean('isAdmin').default('false');
        table.timestamps(true, true);      
    })
  };
  
  exports.down = async function(knex) {
    return await knex.schema.dropTableIfExists('users');
  };