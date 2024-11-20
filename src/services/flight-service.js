const { FlightRepository, AirplaneRepository } = require("../repository")
const { compareTime } = require("../utils/helper")

class FLightService {


    constructor() {
        this.airplaneRepository = new AirplaneRepository()
        this.flightRepository = new FlightRepository()
    }

    async createFlight(data) {
        try {
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error: "Arrival time should not be lesses than Depature time " }
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId)
            // Get total seats from airplane, destructure the object and add total seats to it.
            // This is how buisness logic is added in services
            const flight = await this.flightRepository.createFlight(
                {
                    ...data,
                    totalSeats: airplane.capacity
                }
            )
            return flight
        } catch (error) {
            console.log("Something went wrong in Services")
            throw (error)
        }
    }

    async getAllFlights(data){
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights
        } catch (error) {
            console.log("Something went wrong in Services")
            throw (error)
        }
    }
}

module.exports = FLightService