const Knex = require('knex')
const {Model} = require('objection')
const knexConfig = require('./knexfile')

const knex = Knex(knexconfig.development);
Model.knex(knex);
module.exports = knex;
