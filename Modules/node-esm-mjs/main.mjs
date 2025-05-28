import { hello } from './hello.mjs';
import readline from 'readline';

const names = ['Alice', 'Bob', 'Charlie'];

for (const n of names) {
  console.log(hello(n));
}

