const {Student} = require('../models/models')
const ApiError = require('../error/ApiError')

class StudentController
{
    async create(req, res, next) 
    {
        try{
            const {fullName, age, city, scecialty, parentsName, phone, email,  url} = req.body
            const student = await Student.create({fullName, age, city, scecialty, parentsName, phone, email,  url})
            return res.json(student)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) 
    {
        const students = await Student.findAll()
        return res.json(students)
    }

    async delete(req, res) 
    {

    }
}

module.exports = new StudentController()