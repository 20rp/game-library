var express = require('express');
var path = require('path');

var app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set default directory for pug template files
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/*")));

console.log(path.join(__dirname, "public/*"));

// Set view engine to pug for displaying markup
app.set("view engine", "pug");

app.get('/', function (req, res) {
    res.send("Hello world");
});

app.get('/insert', function (req, res) {
    res.render("insert");
})

app.listen(port);