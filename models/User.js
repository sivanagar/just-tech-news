const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//creare our user model
class User extends Model {};

//define table columns and configuration
User.init(
    {
        //TABLES COLUMNS DEF GO HERE
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        //TABLE CONFIG OPTIONS GO HERE
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;