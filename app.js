var express = require('express');
var path = require('path');
const { render } = require('pug');
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

app.get('/addPublisher', function (req, res) {
    res.render("addPublisher", {
        title: "Publisher Inserter"
        });
});

app.get('/addGenre', function (req, res) {
    res.render("addGenre", {
        title: "Genre Inserter"
    });
});

app.get('/select', function (req, res) {
    result = ins.selectPublishers();
    console.log(result);
});

app.get('/show', function (req, res) {
    res.render("show", {
        title: "Summary View"
    })
})

app.post('/insert', function (req, res) {
    var gameTitle = req.body.gameTitle;
    var gameReleaseDate = req.body.gameReleaseDate;
    var gameDeveloper = req.body.gameDeveloper;
    var gameMetaCriticScore = req.body.gameMetaCriticScore;

    // Insert the data into the games table
    ins.gameInserter(gameTitle, gameReleaseDate, gameDeveloper, gameMetaCriticScore);
});

app.post('/insertPublisher', function (req, res) {
    var publisherTitle = req.body.publisherName;
    var publisherHq = req.body.publisherHq;
    var publisherCountry = req.body.publisherCountry;
    var publisherFounder = req.body.publisherFounder;
    var publisherFoundedDate = req.body.publisherFoundedDate;

    ins.publisherInserter(publisherTitle, publisherHq, publisherCountry, publisherFounder, publisherFoundedDate);
});


app.post('/insertGenre', function (req, res) {
    var genreTitle = req.body.genreTitle;

    ins.genreInserter(genreTitle);
});

// TODO: Render generic success page to redirect user to upon insertion completion.
app.get('/success', function (req, res) {

});

app.listen(port);