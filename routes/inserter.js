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


router.get("/Game", gameInsertController.render); // TODO configure controller for inserting the route

module.exports = router;