class CrudRepository {
    constructor(model) {
        this.model = model
    }


    async create(name) {
        try {
            const result = await this.model.create(name);
            return result
        } catch (error) {
            console.log("Something went wrong in Repository Layer")
            throw (error)
        }
    }

    async destroy(id) {

        try {
            await this.model.destroy({
                where: {
                    id: id
                }
            })
            return true
        }
        catch (error) {
            console.log("Something went wrong in Repository Layer")
            throw (error)
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.findByPk(id);
            result.name = data.name
            await result.save()

            return result;
        } catch (error) {
            console.log("Something went wrong in Repository Layer")
            throw (error)
        }
    }

    async get(id) {
        try {
            const result = await this.model.findByPk(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in Repository Layer")
            throw (error)
        }
    }

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in Repository Layer")
            throw (error)
        }
    }

}
module.exports = CrudRepository