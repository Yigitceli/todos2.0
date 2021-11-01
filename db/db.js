const config = require('../knexfile');
console.log(process.env.ENV);
const db = require('knex')(process.env.ENV === `PRODUCTION` ? config.production : config.development);

module.exports = db;