var http = require('http');
var url = require('url');
var fs = require('fs');

const port = 8080;

http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(port);
console.log(`Local server is listening on http://localhost:${port}`)