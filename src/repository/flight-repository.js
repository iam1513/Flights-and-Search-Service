const { Flights } = require("../models")

class FlightRepository {

    async createFlight(data) {
        try {

            const flight = await Flights.create(data)
            return flight

        } catch (error) {
            console.log("Something went wrong in Repository")
            throw (error)
        }
    }
}

module.exports = FlightRepository