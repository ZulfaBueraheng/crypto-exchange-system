const db = require("../models");

exports.getAllCryptos = async (req, res) => {
  const cryptos = await db.CryptoCurrency.findAll();
  res.json(cryptos);
};
