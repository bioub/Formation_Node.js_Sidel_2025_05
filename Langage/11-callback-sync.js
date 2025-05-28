// Un callback est une fonction passée à un autre API (une fonction, un objet, etc.)
// qui est ensuite appelée à l'intérieur de celui-ci

// function declaration
function hello(name) {
  return `Hello, ${name}!`;
}

// Array.prototype.map with arrow function
const names = ['Alice', 'Bob', 'Charlie'];

// Paradigme impératif (style de code classique)
// Utilise des boucles pour itérer, des variables pour stocker les résultats
// et des instructions conditionnelles pour filtrer les résultats.
const greetings = [];

for (const n of names) {
  greetings.push(hello(n));
}

console.log(greetings); // ['Hello, Alice!', 'Hello, Bob!', 'Hello, Charlie!']

// Paradigme fonctionnel (style de code moderne)
// Utilise des fonctions de haut niveau comme map, filter, reduce, etc.
// Pour réaliser des opérations
console.log(names.map(hello)); // ['Hello, Alice!', 'Hello, Bob!', 'Hello, Charlie!']

// [                                     [
//   'Alice',    -> (el) => hello(el) ->   'Hello, Alice!',
//   'Bob',      -> (el) => hello(el) ->   'Hello, Bob!',
//   'Charlie'   -> (el) => hello(el) ->   'Hello, Charlie!',
// ]                                     ]

// Souvent les callbacks sont directement déclarés au moment de l'appel de la fonction haut niveau
// Car on ne s'en sert qu'une seule fois ici
console.log(names.map(function(el) {
  return `Hello, ${el}!`;
})); // ['Hello, Alice!', 'Hello, Bob!', 'Hello, Charlie!']

console.log(names.map((el) => {
  return `Hello, ${el}!`;
})); // ['Hello, Alice!', 'Hello, Bob!', 'Hello, Charlie!']

console.log(names.map((el) => `Hello, ${el}!`)); // ['Hello, Alice!', 'Hello, Bob!', 'Hello, Charlie!']




