const express = require("express");
const router = express.Router();
// Import the instance of the database
const db = require('../db/js/database');
// Import the Game table model
const Game = require('../models/Game');

// Sync Games table model
Game.sync();

// Controller routes

const gameInsertController = require("../controllers/gameInsertController")
const genreInsertController = require("../controllers/genreInsertController")
const publisherInsertController = require("../controllers/publisherInsertController")

router.get("/game", gameInsertController.render);

router.get("/table/genre", genreInsertController.insertGenre);

router.get("/table/publisher", publisherInsertController.insertPublisher);

module.exports = router;