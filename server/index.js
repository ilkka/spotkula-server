'use strict';

var http = require('http'),
    spotify = require('spotify-node-applescript'),
    express = require('express');

var app = express();

app.get('/', function (request, response) {
  response.send('ok');
});

app.post('/skip', function (request, response) {
  spotify.next(function () {
    response.set('Connection', 'close');
    console.log("Skipped to next track");
    response.send('ok');
  });
});

app.listen(3000);
console.log("Listening on port 3000");

