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
	if(req.url === '/home' || req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else if (req.url === '/contact') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	} else if (req.url === '/api') {
		var myObj = {
			name: 'Himanshu',
			job: 'Software Engineer',
			age: '27'
		}; 
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(myObj));
	} else {
		res.writeHead(400, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}

















	// var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
	// myReadStream.pipe(res);
	// res.writeHead(200, {'Content-Type': 'application/json'});
	// // var myObj = {
	// // 	name: 'Himanshu',
	// // 	job: 'Software Engineer',
	// // 	age: '27'
	// // };

	// var myObjJson = fs.createReadStream(__dirname + '/my.json');
	// myObjJson.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Now listening on port 3000');