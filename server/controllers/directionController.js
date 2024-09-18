const {Direction} = require('../models/models')
const ApiError = require('../error/ApiError')

class DirectionController
{
    async create(req, res) 
    {
        const {name} = req.body
        const direction = await Direction.create({name})
        return res.json(direction)
    }

    async getAll(req, res) 
    {
        const directions = await Direction.findAll()
        return res.json(directions)
    }

    async delete(req, res) 
    {

    }
}


module.exports = new DirectionController()