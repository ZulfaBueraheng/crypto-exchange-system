const db = require("../models");

exports.getAllExchanges = async (req, res) => {
  const exchanges = await db.Exchange.findAll({ include: [db.CryptoCurrency] });
  res.json(exchanges);
};

exports.createExchange = async (req, res) => {
  const { user_id, crypto_id, quantity, price_at_trade } = req.body;
  const exchange = await db.Exchange.create({
    user_id,
    crypto_id,
    quantity,
    price_at_trade,
    exchange_date: new Date(),
  });
  res.status(201).json(exchange);
};
