
exports.up = function(knex) {
    return knex.schema.createTable('categories', table => {
        table.increments().primary();
        table.string('name').notNullable();
        table.integer('user_id').references('id').inTable('users').onUpdate('CASCADE');
        table.timestamps(true,true);
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('categories');
  
};
