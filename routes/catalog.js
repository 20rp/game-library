const express = require("express");
const router = express.Router();
const db = require('../db/js/database')
const Game = require('../models/Game');

Game.sync();

// Controller routes
const gameController = require("../controllers/gameController");

// GET request for one Game.
router.get("/games", gameController.gameList);

// Console log JSON games
router.get("/show", gameController.show);

module.exports = router;