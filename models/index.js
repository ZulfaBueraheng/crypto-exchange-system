const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./User")(sequelize, DataTypes);
db.Wallet = require("./Wallet")(sequelize, DataTypes);
db.Transaction = require("./Transaction")(sequelize, DataTypes);
db.CryptoCurrency = require("./CryptoCurrency")(sequelize, DataTypes);
db.Exchange = require("./Exchange")(sequelize, DataTypes);

// Associations
db.User.hasMany(db.Wallet, { foreignKey: "user_id" });
db.Wallet.belongsTo(db.User, { foreignKey: "user_id" });

db.User.hasMany(db.Exchange, { foreignKey: "user_id" });
db.Exchange.belongsTo(db.User, { foreignKey: "user_id" });

db.CryptoCurrency.hasMany(db.Exchange, { foreignKey: "crypto_id" });
db.Exchange.belongsTo(db.CryptoCurrency, { foreignKey: "crypto_id" });

db.CryptoCurrency.hasMany(db.Wallet, { foreignKey: "crypto_id" });
db.Wallet.belongsTo(db.CryptoCurrency, { foreignKey: "crypto_id" });

db.Wallet.hasMany(db.Transaction, { foreignKey: "sender_wallet_id", as: "SentTransactions" });
db.Wallet.hasMany(db.Transaction, { foreignKey: "receiver_wallet_id", as: "ReceivedTransactions" });

db.Transaction.belongsTo(db.Wallet, { foreignKey: "sender_wallet_id", as: "SenderWallet" });
db.Transaction.belongsTo(db.Wallet, { foreignKey: "receiver_wallet_id", as: "ReceiverWallet" });

module.exports = db;
