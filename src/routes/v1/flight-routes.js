const express = require("express")
const router = express.Router()

const { FlightController } = require("../../controllers")


router.post("/",
    FlightController.create
)

router.get("/",
    FlightController.getAll

)

module.exports = router