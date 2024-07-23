const { Console } = require('console');
const fs = require('fs');

console.log('Loading First');
const fileread = fs.readFileSync('./txt/read.txt','utf-8');
const fileWrite = fs.writeFileSync('./txt/write.txt','I Am Goat');
console.log("File created");
console.log(fileread);
console.log('Loading Last');


//file write 

const data1 = `${fileread} on ${Date(Date.now)}`;
fs.writeFileSync('./txt/output.txt',data1);
console.log("File Is Written Successfully");

console.log('Loading Last');