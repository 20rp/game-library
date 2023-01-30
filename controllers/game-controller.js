const Game = require('../models/Game');

exports.index = (req, res) => {
    res.send("TODO: Index");
};

exports.game_list = function (req, res, next) {
    Game.find({}, "game ...")
    .sort({ title: 1})
    .populate("game")
    .exec(function (err, list_games) {
        if (err) {
            return next(err);
        }
        res.render("game_list", { title: "Game List", game_list: list_games
    });
    });
};