const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Student = sequelize.define('student',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.STRING, allowNull: false},
    parents_fio: {type: DataTypes.STRING, defaultValue: ""},
    phone_number: {type: DataTypes.STRING, unique: true, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Application = sequelize.define('application',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.STRING, allowNull: false},
    parents_fio: {type: DataTypes.STRING, defaultValue: ""},
    phone_number: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: "на рассмотрении"},
})

const Direction = sequelize.define('direction',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Group = sequelize.define('group',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})


Direction.hasMany(Group)
Group.belongsTo(Direction)

Direction.hasMany(Student)
Student.belongsTo(Direction)

Group.hasMany(Student)
Student.belongsTo(Group)

Direction.hasMany(Application)
Application.belongsTo(Direction)

module.exports = {
    Student,
    Application,
    Direction,
    Group
}