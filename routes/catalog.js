const express = require('express');
const router = express.Router();
const db = require('../db/js/database');
const Game = require('../models/Game');
const Genre = require('../models/Genre');

Game.sync();

// Controller routes
const gameController = require('../controllers/gameController');
const genreController = require('../controllers/genreController');
const publisherController = require('../controllers/publisherController');

// Console log JSON games
router.get('/games', gameController.games);

router.get('/genres', genreController.genres);

router.get('/publishers', publisherController.publishers);

module.exports = router;
