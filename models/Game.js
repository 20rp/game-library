const { Sequelize, DataTypes} = require('sequelize');
const db = require('../db/js/database');

    const Game = db.define('Game', {
        gameTitle: {
            type: DataTypes.STRING
        },
        gameReleaseDate: {
            type: DataTypes.DATE
        },
        gameDeveloper: {
            type: DataTypes.STRING
        },
        gameMetaCriticScore: {
            type: DataTypes.INTEGER
        },
        publisherID: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false,
        tableName: 'games'
    });

    module.exports = Game;