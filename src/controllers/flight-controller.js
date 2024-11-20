const { FLightService } = require("../services")

const flightService = new FLightService()

async function create(req, res) {
    try {
        const flight = await flightService.createFlight(req.body)
        return res.status(201).json({
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

module.exports = {
    create
}