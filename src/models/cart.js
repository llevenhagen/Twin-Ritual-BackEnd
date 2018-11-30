module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('carts', {})

  cart.associate = function (models) {
    cart.belongsTo(models.user)
    cart.belongsTo(models.merch)
  }

  return cart
}
