const { Flights } = require("../models")
const { Op } = require("sequelize")
class FlightRepository {

    // Make a private method to filter as this is complex 
    // This way , out code will be more proper
    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        // if (data.minPrice && data.maxPrice) {
        //     Object.assign(filter,
        //         {
        //             [Op.and]: [
        //                 { price: { [Op.gte]: data.minPrice } },
        //                 { price: { [Op.lte]: data.maxPrice } }
        //             ]
        //         }
        //     )
        // }

        let priceFilter = [];

        if (data.minPrice) {
            // Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
            priceFilter.push(filter, { price: { [Op.gte]: data.minPrice } })
        }

        if (data.maxPrice) {
            // Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
            priceFilter.push(filter, { price: { [Op.lte]: data.maxPrice } })
        }
        
        return filter;
    }

    async createFlight(data) {
        try {

            const flight = await Flights.create(data)
            return flight

        } catch (error) {
            console.log("Something went wrong in Repository")
            throw (error)
        }
    }

    async getFlight(flightId) {
        try {

            const flight = await Flights.findByPk(flightId)
            return flight

        } catch (error) {
            console.log("Something went wrong in Repository")
            throw (error)
        }
    }

    async getAllFlights(filters) {
        try {
            const filteredObj = this.#createFilter(filters);
            const flight = await Flights.findAll({
                where: filteredObj
            })
            return flight

        } catch (error) {
            console.log("Something went wrong in Repository")
            throw (error)
        }
    }
}

module.exports = FlightRepository