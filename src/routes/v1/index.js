const cityRoutes = require("./city-routes")
const airportRoutes = require("./airport-routes")
const express = require("express")
const router = express.Router();

// City Routes
router.use('/city', cityRoutes)

// Airport Routes
router.use("/airport", airportRoutes)

module.exports = router