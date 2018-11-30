module.exports = (sequelize, DataTypes) => {
  const merch = sequelize.define('merch', {
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    in_stock: DataTypes.BOOLEAN,
    item_id: DataTypes.INTEGER
  })
  merch.associate = function (models) {
    merch.belongsTo(models.user, {
      through: 'cart',
      as: 'item_id',
      foreignKey: 'item_id'
    })
  }
  return merch
}
