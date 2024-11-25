const express = require("express")
const router = express.Router()

const { FlightController } = require("../../controllers")
const { FlightMiddleware } = require("../../middlewares")

router.post("/",
    FlightMiddleware.validateCreateFlight,
    FlightController.create
)

router.get("/",
    FlightController.getAll

)

router.get("/:id",
    FlightController.get

)

module.exports = router