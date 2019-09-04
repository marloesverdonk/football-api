const Sequelize = require('sequelize')

//const databaseUrl = 'postgres://postgres:lala@localhost:5432/postgres'
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:lala@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db
  .sync()
  .then(() => console.log('data schema has been updated'))
  .catch(console.error)

  module.exports = db