const cityRoutes = require("./city-routes")
const express = require("express")
const router = express.Router();

// City Routes
router.use('/city',cityRoutes)

module.exports= router