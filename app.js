const express = require("express");
const app = express();
const db = require("./models");

app.use(express.json());

// API Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/wallets", require("./routes/walletRoutes"));
app.use("/api/transactions", require("./routes/transactionRoutes"));
app.use("/api/exchanges", require("./routes/exchangeRoutes"));
app.use("/api/cryptos", require("./routes/cryptoRoutes"));

// Start server
db.sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Server running on http://localhost:3000"));
});
