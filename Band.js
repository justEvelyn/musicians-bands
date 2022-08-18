const {db} = require('../db');
const{ Sequelize, DataTypes } = require('sequelize');

//  define the Band model
const Band = db.define('band', {
    name: {
        type: DataTypes.STRING
    },
genre: {
    type: DataTypes.STRING
}
})

module.exports = {
    Band
};