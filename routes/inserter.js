const express = require('express');
const router = express.Router();
// Import the instance of the database
const db = require('../db/js/database');
// Import the Game table model
const Game = require('../models/Game');

// Sync Games table model
Game.sync();

// Controller routes

const gameInsertController = require('../controllers/gameInsertController');
const genreInsertController = require('../controllers/genreInsertController');
const publisherInsertController = require('../controllers/publisherInsertController');

// http://localhost:3000/insert/game
// Render main game insert page
router.get('/game', gameInsertController.insertGame);
router.post('/postGame', gameInsertController.postGame);

// http://localhost:3000/insert/table/genre
// Render insert genre page
router.get('/table/genre', genreInsertController.insertGenre);
router.post('/table/postGenre', genreInsertController.postGenre);

// http://localhost:3000/insert/table/publisher
// Render insert publisher page
router.get('/table/publisher', publisherInsertController.insertPublisher);
// router.post('/table/postPublisher', publisherInsertController.postPublisher) TODO: Configure controller for post publisher

module.exports = router;
