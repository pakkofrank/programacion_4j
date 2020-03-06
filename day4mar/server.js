/*var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('hello world/n');
}).listen(1337, '127.0.0.1');//aqui debemos de poner la ip y el puerto en el navegador con 2 puntos */
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.html');
    res.end(html);
}).listen(1337, '127.0.0.1');