const db = require("../models");

exports.getUserWallets = async (req, res) => {
  const wallets = await db.Wallet.findAll({ where: { user_id: req.params.userId } });
  res.json(wallets);
};

exports.getWalletWithTransactions = async (req, res) => {
  const wallet = await db.Wallet.findByPk(req.params.walletId, {
    include: [
      { model: db.Transaction, as: "SentTransactions" },
      { model: db.Transaction, as: "ReceivedTransactions" },
    ],
  });
  if (!wallet) return res.status(404).json({ message: "Wallet not found" });
  res.json(wallet);
};
