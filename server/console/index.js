const chalk = require('chalk');


const g = chalk.green.bind(chalk);
const y = chalk.yellow.bind(chalk);
const r = chalk.red.bind(chalk);
const b = chalk.blue.bind(chalk);
const w = chalk.white.bind(chalk);

module.exports = {
  g,
  y,
  r,
  b,
  w
}