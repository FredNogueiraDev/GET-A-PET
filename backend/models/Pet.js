const db = require('../db/conn')
const { DataTypes } = require('sequelize');


const Pet = db.define('Pet', {
    name: {
        type: DataTypes.STRING,
        require: true,
    },
    age: {
        type: DataTypes.NUMBER,
        require: true,
    },
    weight: {
        type: DataTypes.NUMBER,
        require: true,
    },
    color: {
        type: DataTypes.STRING,
        require: true,
    },
    images: {
        type: DataTypes.ARRAY,
        require: true,
    },
    available: {
        type: DataTypes.BOOLEAN,
    },
    user: Object,
    adopter: Object,
},
{timestamps: true}
)

module.exports = Pet;