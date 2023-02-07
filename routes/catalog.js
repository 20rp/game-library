const express = require("express");
const router = express.Router();
const db = require('../db/js/database')
const Game = require('../models/Game');

Game.sync();

// Controller routes
const game_controller = require("../controllers/gameController");

// GET request for one Game.
router.get("/games", game_controller.gameList);

module.exports = router;