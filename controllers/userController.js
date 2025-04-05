const db = require("../models");

exports.getAllUsers = async (req, res) => {
  const users = await db.User.findAll();
  res.json(users);
};

exports.getUserWithDetails = async (req, res) => {
  const user = await db.User.findByPk(req.params.id, {
    include: [
      { model: db.Wallet },
      { model: db.Exchange, include: [db.CryptoCurrency] },
    ],
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};
