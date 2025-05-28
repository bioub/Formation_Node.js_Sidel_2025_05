import { hello } from './hello.js';

// Pas besoin d'activer le mode strict dans les modules ES
// c'est déjà le cas par défaut

const names = ['Alice', 'Bob', 'Charlie'];

for (const n of names) {
  console.log(hello(n));
}

