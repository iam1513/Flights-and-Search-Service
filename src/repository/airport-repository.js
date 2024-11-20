const { Airport } = require("../models/index");
const CrudRepository = require("./crud-repository");
class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport)
    }
}
// class AirportRepository {

//     async createAirport(name) {
//         try {
//             const airport = await Airport.create(name);
//             return airport
//         } catch (error) {
//             console.log("Something went wrong in Repository Layer")
//             throw (error)
//         }
//     }

//     async deleteAirport(airportId) {

//         try {
//             await Airport.destroy({
//                 where: {
//                     id: airportId
//                 }
//             })
//             return true
//         }
//         catch (error) {
//             console.log("Something went wrong in Repository Layer")
//             throw (error)
//         }
//     }

//     async updateAirport(airportId, data) {
//         try {
//             const airport = await Airport.findByPk(airportId);
//             airport.name = data.name
//             await airport.save()

//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in Repository Layer")
//             throw (error)
//         }
//     }

//     async getAirport(airportId) {
//         try {
//             const airport = await Airport.findByPk(airportId);
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in Repository Layer")
//             throw (error)
//         }
//     }

// }

module.exports = AirportRepository