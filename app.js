var express = require('express');
var path = require('path');
var dt = require('datatables.net');
const { JSDOM } = require('jsdom');

// Used for including the Sequelize module and allowing for synchronization of the database.
const db = require('./db/js/database.js');


// Authenticate database connection.
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.error(err));

const catalogRouter = require("./routes/catalog");
const insertRouter = require("./routes/inserter")

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
app.use("/insert", insertRouter)

app.get('/select', function (req, res) {
    result = ins.selectPublishers();
    console.log(result);
});

app.get('/insertPublisher', function (req, res) {
    res.render("insertPublisher", {
        title: "Insert Publisher | Game Library",
        window: global.window
    });
});

app.listen(port, function() {
        console.log("Express server running on port: " + port);
});