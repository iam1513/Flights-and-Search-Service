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
        return res.status(SuccessCodes.CREATED).json({
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
        return res.status(SuccessCodes.OK).json({
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

async function get(req, res) {
    try {
        // console.log(req.params.id)
        const flight = await flightService.getFlight(req.params.id)
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: 'Successfully fetched a Flight',
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

async function update(req, res) {
    try {
        // console.log(req.params.id)
        const flight = await flightService.updateFlight(req.params.id, req.body)
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: 'Successfully updated a Flight',
            error: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the Flight',
            error: error
        })
    }
}

module.exports = {
    create,
    getAll,
    get,
    update
}