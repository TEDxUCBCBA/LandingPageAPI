var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var PORT = 3000;

/* =============== MIDDLEWARES =================== */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var pageInfo = { "title": "TEDxPage" }

app.get('/', function(req, resp) {
  resp.json(pageInfo);
});

app.listen(PORT, function() {
	console.log('Listening on Port', PORT);
});