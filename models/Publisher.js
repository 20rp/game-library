const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/js/database');

const Publisher = db.define('Publisher', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    publisherName: {
        type: DataTypes.STRING
    },
    publisherHq: {
        type: DataTypes.STRING
    },
    publisherCountry: {
        type: DataTypes.STRING
    },
    publisherFounder: {
        type: DataTypes.STRING
    },
    publisherFoundedDate: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false,
    tableName: 'publishers'
});

module.exports = Publisher;