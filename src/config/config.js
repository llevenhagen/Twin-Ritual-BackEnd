module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'twinritual',
    user: process.env.DB_USER || 'Laura',
    password: process.env.DB_PASS || 'null',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'https://pacific-oasis-69769.herokuapp.com/' || 'localhost'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
