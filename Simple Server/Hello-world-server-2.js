var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  setTimeout(function(){
    res.end('World\n');   
  },2000);
  res.write('Hello\n');
}).listen(8000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8000/');
