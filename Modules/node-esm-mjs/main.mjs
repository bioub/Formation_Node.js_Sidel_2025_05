import { hello } from './hello.mjs';
import readline from 'node:readline';
import chalk from 'chalk';

const names = ['Alice', 'Bob', 'Charlie'];

for (const n of names) {
  console.log(chalk.red(hello(n)));
}

