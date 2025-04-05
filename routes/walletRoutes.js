const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");

router.get("/user/:userId", walletController.getUserWallets);
router.get("/:walletId", walletController.getWalletWithTransactions);

module.exports = router;
