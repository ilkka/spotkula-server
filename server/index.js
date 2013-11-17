'use strict';

var http = require('http'),
    spotify = require('spotify-node-applescript');

var cb = function(request, response) {

  debugger;

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('Hello spotkula servereerer!');
  response.end();
};

http.createServer(cb).listen(3000, 'localhost');
