module.exports = {
  port: process.env.PORT || 5432 || 8081,
  db: {
    use_env_variable: DATABASE_URL,
    database: process.env.DB_NAME || 'twinritual',
    user: process.env.DB_USER || 'Laura',
    password: process.env.DB_PASS || 'null',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      dialectOptions: {
        ssl: true
    },
      host: process.env.HOST || 'https://pacific-oasis-69769.herokuapp.com/' || 'localhost' || '0.0.0.0'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
