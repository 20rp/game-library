const Game = require('../models/Game');

exports.index = (req, res) => {
    res.send("TODO: Index");
};

exports.show = function (req, res) {
    Game.findAll()
    .then(games => {
        res.render("../views/show", { games: games });
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