const Game = require('../models/Game');

exports.index = (req, res) => {
    res.send("TODO: Index");
};

exports.game_list = function (req, res) {
    Game.findAll()
    .then(games => {
        console.log(games);
        res.sendStatus(200);
    })
    .catch(err => console.error(err));
};