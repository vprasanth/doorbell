var http = require('http');
var player = require('play-sound')(opts = {});
var moment = require('moment');

const PORT = 9000;
var server = http.createServer(handler);

server.listen(PORT);


function handler(request, response){
	
	if (request.url === '/favicon.ico') {
	    response.writeHead(200, {'Content-Type': 'image/x-icon'} );
	    response.end();
	    return;
  	}

	player.play('glass.mp3', err => {err ? console.log.bind(console) : false;});
	console.log('Get the door', moment().format());
	response.end('on my way...\n');
}

