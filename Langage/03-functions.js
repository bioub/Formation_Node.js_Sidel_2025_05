// Une fonction est un bloc de code qui peut être appelé à tout moment.
// Pour appeler une fonction, on utilise son nom suivi de parenthèses.
// Le code à l'intérieur de la fonction ne s'exécute que lorsque la fonction est appelée.
// Le nom de la fonction documente ce que fait la fonction, on peut
// peut etre se passer d'un commentaire explicatif.
// Le choix du nom de la fonction est important pour la lisibilité du code.
// Mais ce n'est pas toujours facile de trouver un nom qui soit à la fois
// explicite et concis.

function sayHello() {
  console.log("Hello, world!");
}

// Appel de la fonction
sayHello();

// Bonne pratique :
// Déclarer les fonctions avant de les appeler.
// Pourtant cela n'est pas obligatoire en JavaScript, car les fonctions sont "hoistées" (hissés) :
// elles sont déplacées en haut de leur portée (scope) lors de l'étape de parsing du code.

// A ce stade, la fonction n'a pas de paramètre.
// Une fonction sans paramètre est moins réutilisable, elle fera toujours la même chose.

// Pour être plus flexible, on peut ajouter un ou plusieurs paramètres à la fonction.
function greet(name) {
  console.log(`Hello, ${name}!`);
}
// On peut appeler la fonction avec un argument, qui sera passé au paramètre.
greet("Alice");
const prenom = "Bob";
// On peut aussi appeler la fonction avec une variable, qui sera passée au paramètre.
greet(prenom);

// La fonction peut aussi avoir plusieurs paramètres.
function greetWithTime(name, time) {
  console.log(`Hello, ${name}! It's ${time}.`);
}
// On peut appeler la fonction avec plusieurs arguments, qui seront passés aux paramètres.
greetWithTime("Alice", "morning");
greetWithTime("Alice", new Date().toLocaleTimeString());

// Schématiquement
//          greet('Alice', 'morning')
//                 |         |
//                 v         v
// function greet(name   , time     ) {
// Ce qui fait le passage de paramètres c'est la correspondance dans les parenthèses de
// l'appel de la fonction et la déclaration de la fonction.
// Utiliser des parenthèses permet d'affecter les paramètres au même titre
// que l'opérateur d'affectation (=) permet d'affecter une valeur à une variable.
// Dans l'exemple précédent, la variable `name` reçoit la valeur `'Alice'`

// En JavaScript, on doit passer les paramètres dans le même ordre que les paramètres de la fonction.
// Dans d'autres langages, on peut passer les paramètres dans n'importe quel ordre en utilisant des named parameters (Python, PHP, Objectif-C, Swift, etc.),
// mais ce n'est pas le cas en JavaScript, mais on peut le simuler en utilisant un objet comme paramètre (vu plus tard dans le chapitre).

// La fonction peut aussi retourner une valeur avec le mot-clé `return`.
function add(a, b) {
  return a + b;
}
// A ce moment là, tout l'appel de la fonction est remplacé par la valeur retournée.
const sum = add(2, 3);
console.log(`The sum is ${sum}.`); // The sum is 5.
console.log(add(1, 2)); // 3
// La valeur retournée vaut l'expression qui commence à la première lettre du nom de la fonction jusqu'à la parenthèse fermante

// On peut aussi avoir des paramètres optionnels en leur donnant une valeur par défaut.
// ES2015
function greetWithDefault(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
// Si on ne passe pas d'argument, le paramètre prend la valeur par défaut.
greetWithDefault(); // Hello, Guest!
greetWithDefault("Alice"); // Hello, Alice!

// Normalement les paramètres par défaut sont placés à la fin de la liste des paramètres.
function sumWithDefault(a, b, c = 0) {
  return a + b + c;
}

console.log(sumWithDefault(1, 2)); // 3
console.log(sumWithDefault(1, 2, 3)); // 6

// S'il n'y a pas de valeur par défaut, le paramètre est `undefined` si on ne passe pas d'argument.
function sumWithUndefined(a, b, c) {
  return a + b + c;
}
console.log(sumWithUndefined(1, 2)); // NaN (Not a Number) (1 + 2 + undefined)

// Une alternative pour les paramètres optionnels est de prévoir une erreur si le paramètre n'est pas passé.
// On peut utiliser `throw` pour lancer une exception si un paramètre est manquant.
function sumWithError(a, b, c) {
  if (c === undefined) {
    throw new Error("The third parameter is required.");
  }
  return a + b + c;
}

// A l'appel de la fonction, si le paramètre n'est pas passé, une erreur est levée.
// sumWithError(1, 2); // Uncaught Error: The third parameter is required.

// Pour ce cas précis, l'idéal serait d'utiliser TypeScript ou les paramètres sont obligatoires par défaut.
// Idem pour les types de paramètres, TypeScript permet de déclarer les types des paramètres et de vérifier qu'ils sont corrects à la compilation.

// Les exceptions sont comme leur nom l'indique, utile pour des cas exceptionnels
// dit autrement si l'erreur ne se produit que de temps en temps
// si le code est mal écrit comme précédemment, autant corriger le code ou utiliser TypeScript pour détecter l'erreur

function greetWithError(name) {
  if (name !== 'Alice' && name !== 'Bob') {
    throw new Error("Name must be 'Alice' or 'Bob'.");
  }
  console.log(`Hello, ${name}!`);
}


const names = ['Alice', 'Bob', 'Charlie'];
const randomName = names[Math.floor(names.length * Math.random())]; // On prend un nom au hasard dans le tableau

// Comme l'erreur ne se produit pas tout le temps
// name pourrait être une saisie utilisateur
// On va essayer d'appeler la fonction dans un bloc `try` et capturer l'erreur dans un bloc `catch`.
try {
  greetWithError(randomName); //
  console.log('Pas d\'erreur...'); //
}
catch (error) {
  console.error(error.message); // Name must be 'Alice' or 'Bob'.
  console.log('Erreur...'); //
}

console.log('La suite du code...'); // La suite du code...
