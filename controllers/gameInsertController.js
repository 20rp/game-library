/*

    I had to disable datatables because it was causing an error regarding the window property.
    This is apparently due to the fact that datatables doesn't like being run in a server side environment
    such as Node.

*/

const Game = require("../models/Game");
const Publisher = require("../models/Publisher");
const Genre = require("../models/Genre");

exports.insert = function (req, res) {
    Game.findAll();
    game = Game.create({
        gameTitle: "Metal Gear Solid III Snake Eater", 
        gameReleaseDate: "2004-01-01", 
        gameDeveloper: "Konami Computer Entertainment", 
        gameMetaCriticScore: "79"})
    .then(insert => {
        res.sendStatus(200);
    })
    .catch(err => console.error(err));
    console.log("Record created with ID: ", game.id);
}

// Problem: Since I am trying to parse two seperate objects into the template, I will need to possibly look at compiling the template first with one set and then
// following that render the final with the second object parsed into it.
exports.render = function (req, res) {
    const publishersPromise = Publisher.findAll()
    const genresPromise = Genre.findAll()

    Promise.all([publishersPromise, genresPromise])
    .then(([publishers, genres]) => {
        res.render("../views/insertGame", { 
            publishers: publishers,
            genres: genres
        });
    })
    .catch(err => console.error(err));
}