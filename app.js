var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.send('Hello World\n');
});

app.listen(3000, function() {
	console.log('Listening on 3000 Port');
});