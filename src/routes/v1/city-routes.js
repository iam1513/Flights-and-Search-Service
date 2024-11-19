const {CityController} = require("../../controllers")
const express = require("express")
const router = express.Router()

router.post("/",
    CityController.create
)

module.exports = router;