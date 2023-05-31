var express = require('express');
var path = require('path');
const { JSDOM } = require('jsdom');
const bodyParser = require('body-parser');

// Used for including the Sequelize module and allowing for synchronization of the database.
const db = require('./db/js/database.js');

const catalogRouter = require('./routes/catalog');
const insertRouter = require('./routes/inserter');

// Create a polyfill that is passed the dom global from JSDOM.
// const dom = new JSDOM();
// global.window = dom.window;
// global.document = dom.window.document;

// Include inserter function
const { userInfo } = require('os');
const Game = require('./models/Game');
console.log('All models were synchronized successfully.');

var app = express();
const port = 9999;

app.use(express.json());

// Initialise body-parser within express
app.use(bodyParser.urlencoded({ extended: false }));

// Set default directory for pug template files
app.set('views', path.join(__dirname, 'views'));
// NOTE in future make sure that you do not include the trailing backslash as this causes the MIME type error.
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine to pug for displaying markup
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Index',
  });
});

app.get('/test-form', function (req, res) {
  res.render('testForm', {
    title: 'Test form',
  });
});

app.post('/post-form', function (req, res) {
  testRes = req.body.textBox;
  res.render('testForm', {
    testResponse: testRes,
  });
  console.log(testRes);
});

app.use('/catalog', catalogRouter);
app.use('/insert', insertRouter);

app.listen(port, function () {
  console.log('Express server running on port: ' + port);
});
