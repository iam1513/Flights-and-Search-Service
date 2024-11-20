const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.price
    ) {
        // If any one of this is missing
        return res.status(400).json({
            data: {},
            success: false,
            message: "Invalid request body for create a flight",
            error: "Missing mandatory properties to create a flight"
        })
    }

    next()
}

module.exports = {
    validateCreateFlight
}