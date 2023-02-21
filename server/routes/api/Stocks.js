const express = require("express");
const router = express.Router();
const { 
  getTickerPage,
  getHistoricalData 
} = require("../../controllers/StocksController.js");

router.route("/").get(getTickerPage);
router.route("/:ticker").get(getHistoricalData);

module.exports = router;
