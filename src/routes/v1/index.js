const cityRoutes = require("./city-routes")
const airportRoutes = require("./airport-routes")
const flightRoutes = require("./flight-routes")
const express = require("express")
const router = express.Router();

// City Routes
router.use('/city', cityRoutes)

// Airport Routes
router.use("/airport", airportRoutes)

// Flight Routes
router.use("/flight", flightRoutes)

module.exports = router