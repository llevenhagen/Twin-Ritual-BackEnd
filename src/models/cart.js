module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
    merchId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  })
  return cart
}
