var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "dbadmin",
    password: "m1tarash1",
    database: "gamelibrary"
});

// Function to insert data into games table in db. Will probably take seperate parameters for each input value.
// TODO: publisherID parameter
function inserter(gameTitle, gameReleaseDate, gameDeveloper, gameMetaCriticScore) {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO `gamelibrary`.`games` VALUES (null, ?, ?, ?, ?, null)";
        var values = [
            gameTitle,
            gameReleaseDate,
            gameDeveloper,
            gameMetaCriticScore
        ];

        con.query(sql, [values[0], values[1], values[2], values[3]], function (err, result) {
            if (err) throw err;
            console.log("Record created successfully!");
        })
    });
}