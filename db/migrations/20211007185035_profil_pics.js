exports.up = function (knex) {
  return knex.schema.createTable("profil_imgs", (table) => {
    table.increments("id").primary();
    table.string("filename");
    table.string("filepath");
    table.string("mimetype");
    
    table.integer("user_id").references("id").inTable("users");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("profil_imgs");
};
