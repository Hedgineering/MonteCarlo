const express = require("express");
const router = express.Router();
const { 
    postSimulations
} = require("../../controllers/SimulationsController.js");

router.route("/Simulations").post(postSimulations);

module.exports = router;