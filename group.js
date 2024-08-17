const fs = require('fs')
const con = require('console')
const user = [
    {"name":"Ashwin","Age":26,"Gender":"Male"},
    {"name":"win","Age":27,"Gender":"Male"},
    {"name":"Ash","Age":29,"Gender":"Male"},
    {"name":"Asin","Age":40,"Gender":"Male"},
    {"name":"An","Age":29,"Gender":"Male"},
    {"name":"MAhila","Age":30,"Gender":"Female"}
];

// Filter users by Male gender
const males = user.filter(u => u.Gender === "Male");

// Filter users by Female gender
const females = user.filter(u => u.Gender === "Female");

const groupedByGender = {
    "Male": males,
    "Female": females
};

console.log(groupedByGender);


const fileread = fs.readFileSync("txt/output.txt","utf-8");

console.log(fileread);

const write = `${fileread} on ${Date(Date.now)}`;

const filewrtie = fs.writeFileSync("txt/write.txt",write);

const newf = fs.readFileSync("txt/write.txt","utf-8");
console.log(newf);