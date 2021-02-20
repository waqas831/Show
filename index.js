console.log("welcome in nodejs");
const fs=require('fs');
fs.writeFileSync('myfirst.txt',"welcome in first file creation");
fs.appendFileSync("myfirst.txt","successfully append the data in myfirst.txt file");
let hello=fs.readFileSync("myfirst.txt");
console.log(hello);
console.log(hello.toString());
