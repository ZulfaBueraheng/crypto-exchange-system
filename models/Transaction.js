module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Transaction", {
    transaction_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sender_wallet_id: DataTypes.INTEGER,
    receiver_wallet_id: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    timestamp: DataTypes.DATE,
    transaction_type: DataTypes.STRING,
    transaction_status: DataTypes.STRING,
  }, {
    tableName: "transactions",
    timestamps: false,
  });
};
