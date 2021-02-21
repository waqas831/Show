console.log("thats a path core module in node js");
const path=require('path');
console.log(path.dirname("https://repl.it/@waqas1ishaq/Show#syncfs/path/path.js"));
console.log(path.basename("https://repl.it/@waqas1ishaq/Show#syncfs/path/path.js"));
console.log(path.extname("https://repl.it/@waqas1ishaq/Show#syncfs/path/path.js"));
console.log(path.parse("https://repl.it/@waqas1ishaq/Show#syncfs/path/path.js"));
let file=path.parse("https://repl.it/@waqas1ishaq/Show#syncfs/path/path.js");
console.log(file.extname);