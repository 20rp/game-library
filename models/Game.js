module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        name: DataTypes.STRING,
        developer: DataTypes.STRING,
        releaseDate: DataTypes.DATE,
        publisher: DataTypes.STRING
    });

    return Game;
}