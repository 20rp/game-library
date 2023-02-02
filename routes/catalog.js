const express = require("express");
const router = express.Router();

// Controller routes
const game_controller = require("../controllers/gameController");

// Game routes
router.get("/", game_controller.index);

// GET request for one Game.
router.get("/games", game_controller.game_list);

module.exports = router;