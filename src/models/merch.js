module.exports = (sequelize, DataTypes) => {
  const merch = sequelize.define('merch', {
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    in_stock: DataTypes.BOOLEAN
  })
  merch.associate = function (models) {
    merch.belongsTo(models.user, {
      through: 'usercart',
      as: 'items',
      foreignKey: 'itemId'
    })
  }
  return merch
}
