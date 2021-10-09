const bcrypt = require("bcrypt");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert({
    username: "Yigitceli",
    password: bcrypt.hashSync("Orkun.33Orkun.33", 10),
    isAdmin: true,
  });
  await knex("categories").del();
  await knex("categories").insert({ name: "TEST", user_id: 1 });
  await knex("todos").del();
  await knex("todos").insert({
    todo_title: "TEST EDİYORUZ",
    description: "ASDASDASD",
    category_id: 1,
  });
};
