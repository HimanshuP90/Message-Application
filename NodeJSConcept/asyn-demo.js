fs = require('fs');

function phoneNumber (err, data) {
	console.log('data: ', data);
}

fs.readdir('/home/himanshu/Desktop/BCS', phoneNumber);

console.log("this comes after");