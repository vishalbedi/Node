var net = require('net');

var server = net.createServer(function(socket){
   socket.write("Hello\n");
   socket.end("World\n");
});

server.listen('8001');
