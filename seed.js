const db = require("./models");

async function seedDatabase() {
  try {
    // เคลียร์ DB ก่อน (optional)
    await db.sequelize.sync({ force: true });
    console.log("Database synced");

    // เพิ่ม CryptoCurrency
    const cryptos = await db.CryptoCurrency.bulkCreate([
      { name: "Bitcoin", symbol: "BTC", current_price: 70000, market_cap: 1300000000000 },
      { name: "Ethereum", symbol: "ETH", current_price: 4000, market_cap: 500000000000 },
      { name: "Ripple", symbol: "XRP", current_price: 0.6, market_cap: 30000000000 },
      { name: "Dogecoin", symbol: "DOGE", current_price: 0.1, market_cap: 15000000000 },
    ]);

    // เพิ่ม Users
    const users = await db.User.bulkCreate([
      { username: "alice", password: "pass123", email: "alice@example.com", registration_date: new Date(), balance: 10000 },
      { username: "bob", password: "pass456", email: "bob@example.com", registration_date: new Date(), balance: 20000 },
    ]);

    // เพิ่ม Wallets
    const wallets = await db.Wallet.bulkCreate([
      { user_id: users[0].user_id, crypto_id: cryptos[0].crypto_id, wallet_address: "addr_btc_alice", balance: 0.5, created_at: new Date() },
      { user_id: users[0].user_id, crypto_id: cryptos[1].crypto_id, wallet_address: "addr_eth_alice", balance: 10, created_at: new Date() },
      { user_id: users[1].user_id, crypto_id: cryptos[0].crypto_id, wallet_address: "addr_btc_bob", balance: 1.2, created_at: new Date() },
      { user_id: users[1].user_id, crypto_id: cryptos[3].crypto_id, wallet_address: "addr_doge_bob", balance: 10000, created_at: new Date() },
    ]);

    // เพิ่ม Exchange (ซื้อขาย)
    await db.Exchange.bulkCreate([
      { user_id: users[0].user_id, crypto_id: cryptos[0].crypto_id, quantity: 0.3, price_at_trade: 68000, exchange_date: new Date() },
      { user_id: users[1].user_id, crypto_id: cryptos[3].crypto_id, quantity: 5000, price_at_trade: 0.09, exchange_date: new Date() },
    ]);

    // เพิ่ม Transactions
    await db.Transaction.bulkCreate([
      {
        sender_wallet_id: wallets[0].wallet_id,
        receiver_wallet_id: wallets[2].wallet_id,
        amount: 0.1,
        transaction_type: "internal",
        transaction_status: "Completed",
        timestamp: new Date(),
      },
      {
        sender_wallet_id: wallets[3].wallet_id,
        receiver_wallet_id: wallets[1].wallet_id,
        amount: 300,
        transaction_type: "external",
        transaction_status: "Completed",
        timestamp: new Date(),
      },
    ]);

    console.log("✅ Seed completed successfully!");
  } catch (err) {
    console.error("❌ Error seeding database:", err);
  } finally {
    await db.sequelize.close();
  }
}

seedDatabase();
