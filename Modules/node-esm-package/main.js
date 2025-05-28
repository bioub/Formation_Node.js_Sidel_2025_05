import { hello } from './hello.js';
import readline from 'node:readline';
import chalk from 'chalk';

const names = ['Alice', 'Bob', 'Charlie'];

for (const n of names) {
  console.log(chalk.green(hello(n)));
}

