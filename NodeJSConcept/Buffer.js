// Buffer: Mechanism for reading or
// manipulating streams of binnary data
// .

// function text2Binary(string){
// 	return string.split('').map(function(char){
// 		return char.charCodeAt(0).toString(2);
// 	}).join(' ');
// }

// text2Binary('L'); //"1001100"



const buf1 = Buffer.alloc(10); // an empty buffer
// console.log(buf1.toJSON()); // { type: 'Buffer', data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] }
// console.log(buf1.length); // 10
buf1.write("Buffer really rocks!"); // write to a buffer
// console.log(buf1.toString());

const buf2 = Buffer.from("hello buffer");
// console.log(buf2.toJSON()); // { type: 'Buffer', data: [ 104, 101, 108, 108, 111, 32, 98, 117, 102, 102, 101, 114 ] }
// console.log(buf2.length); // 12

buf2.write("Happy Republic Day, Himanshu Pandey");
console.log(buf2.toString());