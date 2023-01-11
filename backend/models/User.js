const db = require('../db/conn')
const { DataTypes } = require('sequelize');


const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        require: true,
    },
    email: {
        type: DataTypes.STRING,
        require: true,
    },
    password: {
        type: DataTypes.STRING,
        require: true,
    },
    image: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
        require: true,
    },
},
{timestamps: true}
)

module.exports = User;