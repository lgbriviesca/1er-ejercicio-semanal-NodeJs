const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'lgbriviesca',
  database: 'repairs',
  port: 54321,
});

module.exports = { db };
