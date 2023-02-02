var express = require('express');
var path = require('path');
var dt = require('datatables.net');
const { JSDOM } = require('jsdom');

// Used for including the Sequelize module and allowing for synchronization of the database.
const db = require('./models');
const catalogRouter = require("./routes/catalog");

// Create a polyfill that is passed the dom global from JSDOM.
const dom = new JSDOM();
global.window = dom.window;
global.document = dom.window.document;

// Include inserter function
const ins = require('./db/js/db_builder.js');
const { userInfo } = require('os');
const Game = require('./models/Game');
console.log("All models were synchronized successfully.");

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
        window: global.window,
        title: "Index"
    });
});

app.use("/catalog", catalogRouter);

app.get('/select', function (req, res) {
    result = ins.selectPublishers();
    console.log(result);
});

app.get('/show', function (req, res) {

    res.render("show", {
        title: "Summary View",
        window: global.window
    });
});

// TODO: Render generic success page to redirect user to upon insertion completion.
app.get('/success', function (req, res) {

});

db.sequelize.sync().then(function() {
    app.listen(port, function() {
        console.log("Express server running on port: " + port);
    });

})