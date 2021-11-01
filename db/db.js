const config = require('../knexfile');
const db = require('knex')(process.env.NODE_ENV === `production` ? config.production : config.development);

module.exports = db;