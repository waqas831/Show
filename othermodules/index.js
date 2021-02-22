const chalk=require('chalk');
console.log(chalk.blue("hello world"));
console.log(chalk.blue.italic("waqas ishaq"));
console.log(chalk.blue.underline("hahahahh"));
const validator=require('validator');
const res=validator.isEmail("waqasishaq800@gmail.com");
console.log(res);
console.log(res ? chalk.green.inverse(res):
chalk.red.inverse(res))
