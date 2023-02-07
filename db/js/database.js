const Sequelize = require('sequelize');

// Initialise Sequelize connection
module.exports = new Sequelize('gamelibrary', 'dbadmin', 'm1tarash1', {
    host: 'localhost',
    dialect: 'mysql'
});