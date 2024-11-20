const { AirportRepository } = require("../repository")

class AirportService {
    constructor() {
        this.airportService = new AirportRepository()
    }

    async createAirport(name) {
        try {
            const airport = await this.airportService.createAirport(name)
            return airport
        } catch (error) {
            console.log("Something went wrong in Services")
            throw (error)
        }
    }

    async deleteAirport(airportId) {
        try {
            const response = await this.airportService.deleteAirport(airportId)
            return response
        } catch (error) {
            console.log("Something went wrong in Services")
            throw (error)
        }
    }

    async updateAirport(airportId, name) {
        try {
            const airport = await this.airportService.updateAirport(airportId, name)
            return airport
        } catch (error) {
            console.log("Something went wrong in Services")
            throw (error)
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await this.airportService.getAirport(airportId)
            return airport
        } catch (error) {
            console.log("Something went wrong in Services")
            throw (error)
        }
    }
}

module.exports = AirportService