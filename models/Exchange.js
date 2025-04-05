module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Exchange", {
    exchange_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    crypto_id: DataTypes.INTEGER,
    quantity: DataTypes.FLOAT,
    price_at_trade: DataTypes.FLOAT,
    exchange_date: DataTypes.DATE,
  }, {
    tableName: "exchanges",
    timestamps: false,
  });
};
