const { Console } = require('console');
const fs = require('fs');

console.log('Loading First');
const fileread = fs.readFileSync('./data/Product.json','utf-8');
console.log('Loading Second');
console.log(fileread);