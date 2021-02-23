fs=require('fs');

fs.readFile("./node.json","utf-8",(req,data)=>{
  //console.log(data);
  data1=JSON.parse(data);
  console.log(data1[0].type)
   console.log(data1[1].type)
    console.log(data1[1].batters.batter.type)
     console.log(data1[3].batters)
});
