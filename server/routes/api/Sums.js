const express = require("express");
const router = express.Router();
const { 
  getSum
} = require("../../controllers/SumController");

router.route("/")
  .get(getSum);

module.exports = router;