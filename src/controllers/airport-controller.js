const { AirportService } = require("../services")

const airportService = new AirportService();

async function create(req, res) {
    try {
        console.log(req.body)
        const airport = await airportService.createAirport(req.body)
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully created Airport",
            error: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a Airport',
            error: error
        })
    }
}

async function destroy(req, res) {
    try {
        const response = await airportService.deleteAirport(req.params.id)
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully deleted Airport",
            error: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete a Airport',
            error: error
        })
    }
}

async function update(req, res) {
    try {
        const airport = await airportService.updateAirport(req.params.id, req.body)
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully updated Airport",
            error: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update a Airport',
            error: error
        })
    }
}

async function get(req, res) {
    try {
        const airport = await airportService.getAirport(req.params.id)
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully get a Airport",
            error: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get a Airport',
            error: error
        })
    }
}

async function getAll(req, res) {
    try {
        const airports = await airportService.getAllAirports()
        return res.status(201).json({
            data: airports,
            success: true,
            message: "Successfully get a Airport",
            error: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get a Airport',
            error: error
        })
    }
}

module.exports = {
    create, get, update, destroy, getAll
}