const {CityController} = require("../../controllers")
const express = require("express")
const router = express.Router()

router.post("/",
    CityController.create
)

router.post("/createMany",
    CityController.createMany
)


router.get("/:id",
    CityController.get
)

router.get("/",
    CityController.getAll
)

router.delete("/:id",
    CityController.destroy
)

router.patch("/:id",
    CityController.update
)

module.exports = router;