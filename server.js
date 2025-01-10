

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => { // Creating server
    fs.readFile("sample.json", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("ERROR");
        } else {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});




/*const http= require("http");   //module
//const modules=require("./modules")
const fs=require("fs")
const server = http.createServer((req,res)=>{             //creating server
    res.writeHead(200,{"Content-Type":"application/json"});    //header
    fs.readFile("sample.json",(err,data)=>
    {
        if(err){
            res.writeHead(500,{"content-type":"text/plain"});
            res.end("ERROR")
        }
        else{
            res.end(data);
        }
    })  
    res.end();
});
server.listen(3000,()=>{
    console.log("server is running on port http://localhost:3000")
})

   /* const modules=require('./modules');
    console.log(modules.add(10,20));*/

    
   /* res.write(`Addition: ${modules.add(20,10)}<br>`);
    res.write(`subract: ${modules.subract(20,10)}<br>`);
    res.write(`multiply: ${modules.multiply(20,10)}<br>`);
    res.write(`divide: ${modules.divide(20,10)}<br>`);*/