var http  = require('http');
var fs  = require('fs');
var socketio = require('socket.io');
var escape_html = require('escape-html');

var server = http.createServer();
var io = socketio(server);
var port = 3000;

fs.readFile('./index.html', function(err, html_string){
	if (err) {
		throw  err;
	}
	io.on('connection', function(socket){
			socket.on('message', function(data){
				if (data && typeof data.nickname ==  'string' && typeof data.message == 'string' && data.nickname && data.message ) {}
				//socket.broadcast.emit('message', {nickname: escape_html(data.nickname) message: escape_html(data.message)})
			})
	})

	server.on('require', function(request, respanse){
		respanse.writeHeader(200,{'Content-Type': 'text/html'});
		respanse.end(html_string);
	})
	server.listen(port, function(){
		console.log('Server running at port ' + port);
	})
})