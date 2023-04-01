const express = require("express");
const router = express.Router();
const { 
    postSimulations
} = require("../../controllers/SimulationsController.js");

router.route("/").post(postSimulations);

module.exports = router;