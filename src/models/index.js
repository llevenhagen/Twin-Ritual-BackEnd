const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

if (process.env.DATABASE_URL) {
const sequelize =new Sequelize(process.env.DATABASE_URL,
 {
   dialect: "postgres",
   protocol: "postgres",
   port: 5432,
   host: "https://pacific-oasis-69769.herokuapp.com/",
   logging: true //false
})
} else {
const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  config.production,
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)
}
fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
