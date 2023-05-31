const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/js/database');

const Genre = db.define(
  'Genre',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    genreTitle: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: 'genres',
  }
);

module.exports = Genre;
