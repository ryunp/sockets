var net = require('net');
var PORT = 6969;
var count = 0;

var server = net.createServer();

server.listen(PORT, function() {
	log('Server', 'started on port ' + PORT);
});

server.on('connection', function(socket) {
	log('Server', 'connection from ' + 
		socket.remoteAddress + ':' + socket.remotePort);

	count++;

	socket.on('data', function(chunk) {
		var data = chunk.toString();
		log('Server', 'incoming data [' + data.length + ']: ' + data);
		socket.write('Request #' + count + ' ' + data.substr(0,20) + ' ...');
	});
	socket.on('end', function() {
		log('Server', 'Connection closed!');
	});
});

function log(prefix, msg) {
	console.log(prefix + ': ' + msg);
};
