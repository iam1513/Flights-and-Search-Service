const express = require("express")
const router = express.Router()

const { FlightController } = require("../../controllers")


router.post("/",
    FlightController.create
)

module.exports = router