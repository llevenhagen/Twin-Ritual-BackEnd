module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
    merchId: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
  })
  return cart
}
