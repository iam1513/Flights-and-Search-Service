const {CityController} = require("../../controllers")
const express = require("express")
const router = express.Router()

router.post("/",
    CityController.create
)

router.get("/:id",
    CityController.get
)

router.delete("/:id",
    CityController.destroy
)

router.patch("/:id",
    CityController.update
)

module.exports = router;