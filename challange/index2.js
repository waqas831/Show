const fs=require('fs');
fs.writeFileSync("bio.txt","thats a my first nodejs challage i hope i do very well thats a first step to jump in server side language");
fs.appendFileSync("bio.txt","thats a append file in our existing data file");
fs.readFileSync("bio.txt".toString());
fs.renameSync("bio.txt","mybio.txt");
fs.writeFileSync("hahah.txt");
fs.unlinkSync("hahah.txt");





