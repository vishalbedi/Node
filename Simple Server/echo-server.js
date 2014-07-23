var net = require('net');

var s = net.createServer(function(socket){
   socket.write("I am an ECHO server");
   socket.on('data',function(data){
       socket.write(data);
   });
});
s.listen('8000');
