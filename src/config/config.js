module.exports = {
  port: process.env.PORT || 5432 || 8081,
  db: {
    production: {
    use_env_variable: process.env.DATABASE_URL
  },
    database: 'postgres://jhusegffqvoscz:c8d3622843f16640239518de9968f785020ea2664ad1ad6925e4d63b1f8fd79b@ec2-54-197-234-33.compute-1.amazonaws.com:5432/d56eqrnb6q7vbd' || process.env.DB_NAME || 'twinritual',
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
