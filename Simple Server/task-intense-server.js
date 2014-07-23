
setInterval(function(){
   console.log('Hello World\n'); 
},5000);

var http = require('http');

setInterval(function(){
  http.get({host:'www.google.com'}, function(res){
     console.log(res.headers); 
  });
},2000);




http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8000/');
