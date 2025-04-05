const db = require("../models");

exports.getAllTransactions = async (req, res) => {
  const transactions = await db.Transaction.findAll({
    include: [
      { model: db.Wallet, as: "SenderWallet" },
      { model: db.Wallet, as: "ReceiverWallet" },
    ],
  });
  res.json(transactions);
};

exports.createTransaction = async (req, res) => {
  const { sender_wallet_id, receiver_wallet_id, amount, transaction_type } = req.body;
  const transaction = await db.Transaction.create({
    sender_wallet_id,
    receiver_wallet_id,
    amount,
    transaction_type,
    transaction_status: "Pending",
    timestamp: new Date(),
  });
  res.status(201).json(transaction);
};
