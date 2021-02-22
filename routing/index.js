const http=require('http');
console.log(http);
http.createServer((req,res)=>{
  req.end("welcome in first time server creation");
});
Server.listen(8000,"127.0.0.0",()=>{
  console.log("we are created server");
});