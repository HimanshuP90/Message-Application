// var stuff = require('./stuff');

// console.log(stuff.counter(['reactjs', 'nodejs', 'redux']));

// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi, 5));

var fs = require('fs');

// fs.readFile('my.txt', 'utf-8', function(err, data){
// 	fs.writeFile('write.txt', data);
// });

// fs.unlink('write.txt'); //delete file

// fs.rmdirSync('stuff'); // create dir

//Create directory -> then create Me.txt file
fs.mkdir('stuff', function(){
	fs.readFile('my.txt', 'utf-8', function(err,data){
	  fs.writeFile('./stuff/Me.txt', data);
	});
});

//Remove Directories

fs.unlink('./stuff/Me.txt', function(){
	fs.rmdir('stuff');
});
