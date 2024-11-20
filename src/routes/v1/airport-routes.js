const { AirportController } = require("../../controllers")

const express = require("express")

const router = express.Router()

router.post("/",
    AirportController.create
)

router.get("/:id",
    AirportController.get
)

router.patch("/:id",
    AirportController.update
)

router.delete("/:id",
    AirportController.destroy
)

module.exports = router