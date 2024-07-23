const { Console } = require('console');
const fs = require('fs');


fs.readFile('./txt/read.txt', 'utf-8', (err, data) => {
    if (err) return console.log("Error");
    console.log(data);
    fs.readFile('./txt/output.txt', 'utf-8', (err, data1) => {
        if (err) return console.log("Error");
        console.log(data1);
        fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data3) => {
            if (err) return console.log("Error");
            console.log(data3);
            const file = `${data1}.txt\n${data2}.txt`;
                fs.writeFile('./txt/output.txt', file, 'utf-8', (err) => {
                console.log('Fiel Is Written');
            })
        })
    })
})