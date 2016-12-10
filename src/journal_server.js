var express = require('express');
var morgan = require("morgan");

var app = express();
app.use(morgan("short"));


var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/journal');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var journalRoutes = require('./routes/journal_entry.js')(app);

var server = app.listen(3001, function () {
    console.log('Server running at http://127.0.0.1:3001/');
});
