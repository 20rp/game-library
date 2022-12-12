var http = require('http');
var express = require('express');
var path = require('path');

var app = express();
const port = 8000;

app.get('/', function (req, res) {
    res.send("Hello world");
});

app.get('/insert', function (req, res) {
    res.send("Hello world!");
})

app.listen(port);