var net = require('net');

var s = net.createServer(function(socket){
   socket.write("I am an ECHO server");
   socket.on('data',function(data){
       socket.write(data);
   });
});
console.log('Server started at port 8000');
s.listen('8000');
