var express = require('express');
var path = require('path');
// Include inserter function
const ins = require('./db/js/db_builder.js');

var app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set default directory for pug template files
app.set("views", path.join(__dirname, "views"));
// NOTE in future make sure that you do not include the trailing backslash as this causes the MIME type error.
app.use(express.static(path.join(__dirname, "public")));

// Set view engine to pug for displaying markup
app.set("view engine", "pug");

app.get('/', function (req, res) {
    res.render("index", {
        title: "Index"
    });
});

app.get('/addGame', function (req, res) {
    res.render("addGame", { 
        title: "Game Inserter"
    });
});

app.post('/insert', function (req, res) {
    var gameTitle = req.body.gameTitle;
    var gameReleaseDate = req.body.gameReleaseDate;
    var gameDeveloper = req.body.gameDeveloper;
    var gameMetaCriticScore = req.body.gameMetaCriticScore;

    // Insert the data into the games table
    ins.inserter(gameTitle, gameReleaseDate, gameDeveloper, gameMetaCriticScore);
});

app.listen(port);