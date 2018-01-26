// 		  reeuest
// client ---------------> server
			// req+ req headers
// client <--------------- server
//           response
//          res data + res headers

// response headers: Content-Type, Status
// A program running on a computer
// can listen for request sent to a 
// particular port number

// 172.24.86.76:3000

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});

	var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');
	myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Now listening on port 3000');