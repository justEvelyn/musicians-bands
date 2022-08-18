const path = require('path');
const { Sequelize /*, Model*/ } = require('sequelize');


// - create the new sequelize connection
const db = new Sequelize({
    dialect: 'sqlite',
    storage: './data.sqlite'
})


module.exports = {
   db
};


