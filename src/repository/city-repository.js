const { Op } = require("sequelize")
const { City } = require("../models/index")

class CityRepository{
   async createCity({name}){
    try{
        const city = await City.create({name})
        return city
    }catch(error){
        console.log("Something went wrong in Repository Layer/")
        throw {error}

    }
   }

   async deleteCity(cityId){
    try {
        await City.destroy({
            where :{
                id : cityId
            }
        })
        return true
    } catch (error) {
        console.log("Something went wrong in Repository Layer/")
        throw {error}
    }
   }

   async updateCity(cityId,data){
        try {
            // App 2 ===> Won't return updated data
            // const city = await City.update(data,
            //     {
            //         where :{
            //             id : cityId
            //         }
            //     }

               
            // )

            // App 2 ===> Will return updated data

            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save()

            return city
        } catch (error) {
            console.log("Something went wrong in Repository Layer/")
            throw {error}
            
        }
   }

   async getCity(cityId){
    try {
        const city = await City.findByPk(cityId)
        return city
    } catch (error) {
        console.log("Something went wrong in Repository Layer/")
        throw {error}
    }
   }

   async getAllCities(filter){ // filter can also be empty
    try {
        if(filter.name){
            const cities = await City.findAll({
                where : {
                    name : {
                        [Op.startsWith] : filter.name
                    }
                }
            })
            return cities;
        }
        // If we dont have any filter, we will return all the cities
        const cities = await City.findAll();
        return cities
    } catch (error) {
        console.log("Something went wrong in Repository Layer/")
        throw {error}
    }
   }

}

module.exports = CityRepository