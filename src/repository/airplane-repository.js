const { Airplane } = require("../models")

class AirplaneRepository {
    async getAirplane(airplaneId) {
        try {

            const airplane = await Airplane.findByPk(airplaneId)
            return airplane

        } catch (error) {
            console.log("Something went wrong in Repository")
            throw (error)
        }
    }
}

module.exports = AirplaneRepository