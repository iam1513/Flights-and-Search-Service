const { CityService } = require('../services/index')

const cityService = new CityService();

async function create(req,res){
    try {
        const city = await cityService.createCity(req.body)
        return res.status(201).json({
            data : city,
            success : true,
            message :'Successfully created a City',
            error : {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            success : false,
            message :'Not able to create a City',
            error : error
        })
    }
}

async function destroy(req,res){
    try {
        const response = await cityService.deleteCity(req.params.id)
        return res.status(200).json({
            data : response,
            success : true,
            message :'Successfully deleted a City',
            error : {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            success : false,
            message :'Not able to delete a City',
            error : error
        })
    }
}

async function get(req,res){
    try {
        const city = await cityService.getCity(req.params.id)
        return res.status(200).json({
            data : city,
            success : true,
            message :'Successfully got a City',
            error : {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            success : false,
            message :'Not able to get a City',
            error : error
        })
    }
}

async function getAll(req,res){
    try {
        const cities = await cityService.getAllCities()
        return res.status(200).json({
            data : cities,
            success : true,
            message :'Successfully fetched all Cities  ',
            error : {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            success : false,
            message :'Not able to get all Cities',
            error : error
        })
    }
}

async function update(req,res){
    try {
        const city = await cityService.updateCity(req.params.id,req.body)
        return res.status(200).json({
            data : city,
            success : true,
            message :'Successfully updated a City',
            error : {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            success : false,
            message :'Not able to update a City',
            error : error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}