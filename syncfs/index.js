console.log("syncronuous files in fs");
const fs=require('fs');
fs.writeFile("bio.txt","welcome in sync files in nodejs file lets enjoy",(err)=>{
  console.log("file created successfully");
})

fs.appendFile("bio.txt","hahahah that is  a updated file in node js that is a one step move forward in backend",(err)=>{
console.log("updated successfully in file");
console.log(err);
})


fs.readFile("bio.txt","utf-8",(arr,data)=>{
  console.log("successfully read file");
  console.log(data); 
})

fs.rename("bio.txt","mybio.txt",(arr)=>{
  console.log("file name changed successfully");
});

