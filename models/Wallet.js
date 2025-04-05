module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Wallet", {
    wallet_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    crypto_id: DataTypes.INTEGER,
    wallet_address: DataTypes.STRING,
    balance: DataTypes.FLOAT,
    created_at: DataTypes.DATE,
  }, {
    tableName: "wallets",
    timestamps: false,
  });
};
