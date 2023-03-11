const Game = require('../models/Game');

exports.games = function (req, res) {
    Game.findAll()
    .then(games => {
        res.render("../views/games", { games: games });
    })
    .catch(err => console.error(err));
}

exports.gameList = function (req, res) {
    Game.findAll()
    .then(games => {
        res.render("../views/gameList", { games: games });
    })
    .catch(err => console.error(err));
};