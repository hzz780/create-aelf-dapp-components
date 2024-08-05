#!/usr/bin/env node
const yParser = require('yargs-parser');
const { join } = require('path');
const { existsSync } = require('fs');
const chalk = require('chalk');
const run = require('./lib/run');

const args = yParser(process.argv.slice(2));

if (args.v || args.version) {
  console.log(chalk.cyan(require('./package').version));
  process.exit(0);
}

console.log(chalk.cyan('⭐️ Hi,welcome to create your project by create-aelf-dapp'));

const name = args._[0] || '';

const type = args.t || args.type || '';
delete args.type;

(async () => {
  await run({
    name,
    type,
    args,
  });
  process.exit(0);
})();
