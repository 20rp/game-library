const Game = require("../models/Game");

exports.insert = function (req, res) {
    game = Game.create({
        gameTitle: "Metal Gear Solid III Snake Eater", 
        gameReleaseDate: "2004-01-01", 
        gameDeveloper: "Konami Computer Entertainment", 
        gameMetaCriticScore: "79"})
    .then(insert => {
        res.send(200);
    })
    .catch(err => console.error(err));
    console.log("Record created with ID: ", game.id);
}