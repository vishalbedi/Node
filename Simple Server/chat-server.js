var net = require('net');

var sockets = [];
var s = net.createServer(function(socket){
    sockets.push(socket);
    
    socket.on('data', function(data){
	sockets.forEach(function(client){
	   if(socket != client)
	   client.write(data);
	});
    });
    
    socket.on('end',function(){
	var i = sockets.indexOf(socket);
	delete sockets[i];
    });
});
console.log("Chat Server Started");
s.listen('8000');
