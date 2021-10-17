exports.up = async function (knex) {
  return await knex.schema.createTable("todos", function (table) {
    table.increments("id").primary();
    table.string("todo_title").notNullable();
    table.string("description");
    table.integer("category_id").references("id").inTable("categories");
    table.boolean("is_complete").default(false);
    table.timestamps(true, true);
  });
};

exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists("todos");
};
