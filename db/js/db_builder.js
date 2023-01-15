var mysql = require('mysql');
const { Sequelize, DataTypes } = require('sequelize');


var con = mysql.createConnection({
    host: "localhost",
    user: "dbadmin",
    password: "m1tarash1",
    database: "gamelibrary"
});

// TODO: Implement function for checking if the tables exist and if not, building from the sql file.
function dbBuilder() {
}

// TODO: Implement function to query publisher table for values to display in select in /addGame.
function selectPublishers() {
    con.connect(function(err) {
        if (err) throw err;
        var sql = "SELECT * FROM `gamelibrary`.`publishers`";
        
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log("Query ran successfully.");
            return result;
        });
    });

}

// Function to insert data into games table in db. Will probably take seperate parameters for each input value.
// TODO: publisherID parameter
function gameInserter(gameTitle, gameReleaseDate, gameDeveloper, gameMetaCriticScore) {
    con.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO `gamelibrary`.`games` VALUES (null, ?, ?, ?, ?, null)";
        var values = [
            gameTitle,
            gameReleaseDate,
            gameDeveloper,
            gameMetaCriticScore
        ];

        con.query(sql, [values[0], values[1], values[2], values[3]], function (err, result) {
            if (err) throw err;
            console.log("Game:", gameTitle,"record created successfully!");
        })
    });
}

function publisherInserter(publisherName, publisherHq, publisherCountry, publisherFounder, publisherFoundedDate) {
    con.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO `gamelibrary`.`publishers` VALUES (null, ?, ?, ?, ?, ?)";
        var values = [
            publisherName,
            publisherHq,
            publisherCountry,
            publisherFounder,
            publisherFoundedDate
        ];

        con.query(sql, [values[0], values[1], values[2], values[3], values[4]], function (err, result) {
            if (err) throw err;
            console.log("Publisher:", publisherName, "record created successfully!")
        })
    })
}

function genreInserter(genreTitle) {
    con.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO `gamelibrary`.`genres` VALUES (null, ?)";

        con.query(sql, genreTitle, function (err, result) {
            if (err) throw err;
            console.log("Genre:", genreTitle, "record created successfully!")
        })
    })
}

async function sqlcon() {
    const sequelize = new Sequelize('gamelibrary', 'dbadmin', 'm1tarash1', {
        host: 'localhost',
        dialect: 'mysql'
    });
    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }

    const Game = sequelize.define('Game', {
        gameTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gameReleaseDate: {
            type: DataTypes.DATE,
        },
        gameDeveloper: {
            type: DataTypes.STRING
        }
    })

    console.log(Game === sequelize.models.Game);
};




module.exports = {selectPublishers, gameInserter, publisherInserter, genreInserter, sqlcon};