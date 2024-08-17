const http = require('http');

//create server
// const server = http.createServer((req, res) => {
//     res.end("Hello From Server");
// }); 
// //listen on port 3000
// server.listen(3000,'127.0.0.1', () => {
//     console.log("Server is listening on port 3000");
//     });


const server2 = http.createServer((req,res)=>{
    res.end("Nikkal Mc");
});

server2.listen(3000,'127.0.0.1',()=>{
    console.log("Oi Huig")
});