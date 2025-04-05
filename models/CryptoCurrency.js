module.exports = (sequelize, DataTypes) => {
  return sequelize.define("CryptoCurrency", {
    crypto_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    symbol: DataTypes.STRING,
    current_price: DataTypes.FLOAT,
    market_cap: DataTypes.FLOAT,
  }, {
    tableName: "cryptocurrencies",
    timestamps: false,
  });
};
