var net = require('net');
var PORT = 6969;
var HOST = 'localhost';
var msgMax = 25;
var client = net.connect(PORT, HOST);
var input;

client.on('connect', function() {
	log('Client', 'Connected to ' + HOST + ':' + PORT);


	if (process.argv[2]) {
		send(client, process.argv[2]);
		client.end();
	} else {
		//send(client, randString(rand(50,100)));
		process.stdin.on('data', function(input) {
			input = input.toString();
			if (input !== null)
				if (input === '\n') {
					client.end();
					process.stdin.end();
				} else
					send(client, input);
		});
	}
});

client.on('data', function(chunk) {
	log('Client', 'incoming data: ' + chunk.toString());
});

client.on('end', function() {
	log('Client', 'Connection closed');
	
});

function randString(len) {
	// String buildingn array	
	var buffer = [];
	
	// Visible ASCII symbols: 33 - 126
	for (i=0; i<len; i++)
		buffer.push(String.fromCharCode(rand(33,126)));

	// Join the random characters in a string
	return buffer.join('');
}

function rand(min, max) {
	return Math.random() * (max-min) + min;
}

function send(client, msg) {
	// Explicit string conversion
	msg = msg.toString();

	// Check for newline - remove
	if (msg.substr(msg.length-1, 1) == '\n')
		msg = msg.substr(0,msg.length-1);

	// Log event
	log('Client', 'sending [' + msg.length + '] ' +
		 msg.substr(0,msgMax) + ' ...');

	// Send data
	client.write(msg);
}

function log(prefix, msg) {
	console.log(prefix + ': ' + msg);
};
