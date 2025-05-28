// Dans Node.js, pas besoin de créer une fonction pour encapsuler le code
// c'est déjà automatique avec les modules CommonJS
// function (require, exports) {
'use strict';

// require est synchrone (tant que le fichier n'a pas été chargé et exécuté, on ne passe pas à la suite)
const { hello } = require('./hello.js');
const readline = require('node:readline');
const {default: chalk} = require('chalk');

const names = ['Alice', 'Bob', 'Charlie'];

for (const n of names) {
  console.log(chalk.blue.underline(hello(n)));
}

// }
