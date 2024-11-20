const { AirportRepository } = require("../repository")

class AirportService {
    constructor() {
        this.airportService = new AirportRepository()
    }

    async createAirport(name) {
        try {
            const airport = await this.airportService.create(name)
            return airport
        } catch (error) {
            console.log("Something went wrong in Services")
            throw (error)
        }
    }

    async deleteAirport(airportId) {
        try {
            const response = await this.airportService.destroy(airportId)
            return response
        } catch (error) {
            console.log("Something went wrong in Services")
            throw (error)
        }
    }

    async updateAirport(airportId, name) {
        try {
            const airport = await this.airportService.update(airportId, name)
            return airport
        } catch (error) {
            console.log("Something went wrong in Services")
            throw (error)
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await this.airportService.get(airportId)
            return airport
        } catch (error) {
            console.log("Something went wrong in Services")
            throw (error)
        }
    }

    async getAllAirports() {
        try {
            const airports = await this.airportService.getAll()
            return airports
        } catch (error) {
            console.log("Something went wrong in Services")
            throw (error)
        }
    }
}

module.exports = AirportService