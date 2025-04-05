const express = require("express");
const router = express.Router();
const cryptoController = require("../controllers/cryptoController");

router.get("/", cryptoController.getAllCryptos);

module.exports = router;
