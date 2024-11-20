const { FLightService } = require("../services")
const { ClientErrorCodes, SuccessCodes } = require("../utils/status-codes")
const flightService = new FLightService()

async function create(req, res) {
    try {
        // De structure to avoid extra data
        const flightData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightData)
        return res.SuccessCodes.CREATED.json({
            data: flight,
            success: true,
            message: 'Successfully created a Flight',
            error: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a Flight',
            error: error
        })
    }
}

async function getAll(req, res) {
    try {
        const flights = await flightService.getAllFlights(req.query)
        return res.SuccessCodes.OK.json({
            data: flights,
            success: true,
            message: 'Successfully fetched all Flight',
            error: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the Flight',
            error: error
        })
    }
}

module.exports = {
    create,
    getAll
}