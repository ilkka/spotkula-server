'use strict';

var http = require('http'),
    spotify = require('spotify-node-applescript'),
    express = require('express');

var app = express();

app.get('/', function (request, response) {
  response.send('ok');
});

app.listen(3000);
console.log("Listening on port 3000");

