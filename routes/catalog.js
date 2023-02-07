const express = require("express");
const router = express.Router();
const db = require('../db/js/database')
const Game = require('../models/Game');

Game.sync();

// Controller routes
// const game_controller = require("../controllers/gameController");

// Game routes
router.get("/", (req, res) => 
Game.findAll()
.then(games => {
    console.log(games);
    res.sendStatus(200);
})
.catch(err => console.log(err)));

// GET request for one Game.
// router.get("/games", game_controller.game_list);

module.exports = router;