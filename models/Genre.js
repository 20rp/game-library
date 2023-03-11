const { Sequelize, DataTypes} = require('sequelize');
const db = require('../db/js/database');

const Genre = db.define('Genre', {
    genreTitle: {
        type: DataTypes.STRING
    }
},{
    timestamps: false,
    tableNam: 'genres'
});

module.exports = Genre;