const data = [1,2,3,4,5,9];

const [,,a] = data;

console.log(a);
console.log(data[0]);
console.log(data[1]);

//deleting data

const [c,b,...rest] = data;
console.log(rest);