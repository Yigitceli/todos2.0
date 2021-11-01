// Update with your config settings.
require("dotenv").config();
const path = require("path");
console.log(path.join(__dirname, "db/migrations"));
module.exports = {
  development: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    },

    migrations: {
      directory: path.join(__dirname, "db/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "/db/seeds/dev"),
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "db/migrations"),
    },
    seeds: {
      directory: "./db/seeds/dev",
    },
  },
};
