// Un objet en programmation est un système qui regroupe des valeurs et des fonctions.
// Exemple :
console.log(Math.PI);
console.log(Math.random());

// Dans le jargon objet, les valeurs sont appelées des propriétés et les fonctions sont appelées des méthodes.

// Math.PI est une propriété de l'objet Math.
// Math.random() est une méthode de l'objet Math.

// La programmation orientée objet (POO) est un paradigme de programmation
// comme la programmation impérative ou fonctionnelle vues précédents.
// Dans ce paradigme le découpage du code se fait autour d'objets
// En JavaScript c'est plutôt rare (mais cela se fait dans Angular/NestJS et un certains nombre d'autres technos)

// En JavaScript il existe un certains nombre d'objets prédéfinis
// Par le langage, ex :
console.log(typeof Math); // 'object'
console.log(typeof JSON); // 'object'
console.log(typeof Date); // 'function' (c'est également un objet)
console.log(typeof String); // 'function' (c'est également un objet)

// Ou par la plateforme, ex :
console.log(typeof process); // 'object' (dans Node.js)
console.log(typeof global); // 'object' (dans Node.js)
console.log(typeof console); // 'object' (dans Node.js et le navigateur)
console.log(typeof window); // 'object' (dans le navigateur)
console.log(typeof document); // 'object' (dans le navigateur)
console.log(typeof navigator); // 'object' (dans le navigateur)

// Pour démarrer JavaScript est un bon choix, ça permet de se familiariser avec l'utilisation d'objet
// sans l'obligation de les créer (contrairement à Java)

// La particularité du modèle objet JavaScript est qu'il est dynamique
// On peut ajouter des propriétés et des méthodes à un objet à tout moment
console.log(Math.sum); // undefined

// Extension d'objet
// Ajouter ou modifier une propriété ou une méthode d'un objet prédéfini
Math.sum = function (a, b) {
  return a + b;
}
console.log(Math.sum(2, 3)); // 5
console.log(Math.sum); // [Function: sum]

delete Math.sum; // Supprimer la méthode sum de l'objet Math

// delete est un mot-clé réservé en JavaScript
// Il permet de supprimer une propriété ou une méthode d'un objet
// ou l'objet lui-même s'il est global
// delete Math; // équivalent à delete globalThis.Math

// C'est une mauvaise pratique de modifier les objets prédéfinis (par le langage, la plateforme ou même par une bibliothèque tierce)
// Parce si l'objet prédéfini est modifié par une autre bibliothèque ou par une future version du langage, cela peut causer des bugs dans votre code.
// A l'exception :
// - des test unitaires, où il est parfois nécessaire de modifier les objets prédéfinis pour simuler des comportements spécifiques.
// - de l'objet global (global dans Node.js, window dans le navigateur, globalThis depuis ES2020) où il est possible de définir des variables globales

// En JavaScript on peut considérer un object comme un dictionnaire :
// un ensemble de paires clé/valeur
// c'est bien quelque chose de dynamique, on peut ajouter, modifier ou supprimer des paires clé/valeur à tout moment
// à la différence de la plupart des langages de programmation ou les objets une fois créés sont statiques
// on peut modifier les valeurs des propriétés, mais pas ajouter ou supprimer des propriétés

// Il y a 2 façons d'accéder aux clés d'un objet :
// - la notation par point : objet.clé (Math.PI, Math.random())
// - la notation par crochets : objet['clé'] (Math['PI'], Math['random']())

console.log(Math.PI); // 3.141592653589793
console.log(Math['PI']); // 3.141592653589793
console.log(Math.random()); // un nombre aléatoire entre 0 et 1
console.log(Math['random']()); // un nombre aléatoire entre 0 et 1

// La notation par crochets est plus lourde à écrire, mais elle permet d'accéder aux clés dynamiquement
const key = 'PI';
console.log(Math[key]); // 3.141592653589793

// Pour créer un objet en JavaScript, il existe plusieurs façons :
// - la notation littérale d'objet (object literal)
// - le constructeur d'objet (constructor)

// Object literal
// C'est la façon la plus courante de créer un objet en JavaScript
// On utilise des accolades {} comme une valeur (c'est pas derrière un if ou une fonction mais on affecte les accolades à une variable ou à un argument)
// Les cas d'utilisations :
// - créer un objet une seule fois avec des propriétés et des méthodes
// - créer plusieurs objets avec uniquement des propriétés
// - ne pas avoir besoin d'un type pour identifier rapidement l'objet

// Exemple : Namespace Object (par convention on commence par une Majuscule)
// Un objet dans lequel on regroupe des propriétés et des méthodes liées à une même problématique
// Exemple Math qui contient les propriétés et méthodes liées aux mathématiques
// Avec les modules (prochain chapitre, les Namespace Object deviennent une mauvaise pratique)
const MyMath = {
  sum(a, b) { // nouvelle syntaxe ES2015 remplace sum: function(a, b) {}
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  }, // la virgule finale est autorisée (depuis ES5)
};

console.log(MyMath.sum(1, 2)); // 3

// Exemple d'objet multiples sans méthodes
const users = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Jane',
    age: 25,
  }
];

// users.length; // 2
// users.filter(user => user.age > 20); // [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]

users.push({
  name: 'Toto',
  age: 12,
});

for (const user of users) {
  console.log(user.name); // John, Jane
}

// Pattern options, simuler des paramètres nommées
function createButton(label, color = 'blue', size = 'large', onClick = () => {}, onHover = () => {}, onDoubleClick = () => {}) {
  // label, color, size et onClick sont des paramètres nommés
  // on peut les passer dans n'importe quel ordre
  console.log(`Label: ${label}, Color: ${color}, Size: ${size}`);
  onClick();
  onHover();
  onDoubleClick();
}

// Le besoin : appeler createButton avec label et onDoubleClick uniquement
// le reste on aimerait utiliser des valeurs par défaut
createButton('Click Me', undefined, undefined, undefined, undefined, () => console.log('Button double clicked!'));

// Avec un objet on pourrait simuler des paramètres nommées
function createButtonWithOptions(options = {}) {
  // options est un objet avec des propriétés label, color, size, onClick, onHover et onDoubleClick
  const label = options.label
  const color = options.color ?? 'blue';
  const size = options.size ?? 'large';
  const onClick = options.onClick ?? (() => {});
  const onHover = options.onHover ?? (() => {});
  const onDoubleClick = options.onDoubleClick ?? (() => {});

  console.log(`Label: ${label}, Color: ${color}, Size: ${size}`);
  onClick();
  onHover();
  onDoubleClick();
}

createButtonWithOptions({
  label: 'Click Me',
  onDoubleClick: () => console.log('Button double clicked!'),
});

// L'objet a bien été créé une seule fois le temps de l'appel

// MAUVAISE PRATIQUE :
// plusieurs objets avec des méthodes
// dans cet exemple il y a autant de fonction greet que d'objet (si 1 000 000 d'objet === 1 000 000 de fonction greet en mémoire...)
// const person1 = {
//   name: 'John',
//   age: 30,
//   greet: function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// };

// const person2 = {
//   name: 'Jane',
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// };


// Constructor : L'autre cas d'utilisation (par convention on commence par une Majuscule)
// - les objets avec des méthodes créées plusieurs fois
// - un besoin de type pour identifier l'objet

// Historiquement, ça se faisait avec des fonctions
// depuis ES2015, on a un mot clé pour ça : class

// Historique (a ne plus utiliser)
// function Person(name, age = 30) {
//   this.name = name;
//   this.age = age;
//   this.type = 'user';
//   // MAUVAISE PRATIQUE d'ajouter des méthodes dans le constructeur :
//   // car à chaque fois qu'on crée un objet de type Person, on crée une nouvelle méthode greet
//   // this.greet = function() {
//   //   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   // };
// }

// Person.getClass = function() {
//   return 'Person';
// }

// Person.prototype.greet = function() {
//   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// Avec la syntaxe ES2015, on utilise le mot clé class
class Person {
  constructor(name, age = 30) {
    this.name = name;
    this.age = age;
    this.type = 'user';
  }
  static getClass() {
    return 'Person';
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// console.log(Person); // [Function: Person]
console.log(typeof Person); // 'function'
// console.log(Person()); // undefined (car la fonction ne retourne rien)
const person1 = new Person('John');
console.log(person1); // Person {} (new permet de créer un object de type Person)
person1.greet(); // Hello, my name is John and I am 30 years old.
console.log(Person.getClass()); // 'Person'


const person2 = new Person('Jane');
console.log(person2); // Person {} (new permet de créer un object de type Person)


// Quand les syntaxes litérales existent elle sont à privilégier
// Exemple
console.log(new Object()); // {} MAUVAISE PRATIQUE
console.log({}); // {}

console.log(new String()); // '' MAUVAISE PRATIQUE
console.log(''); // ''

console.log(new Array()); // [] MAUVAISE PRATIQUE
console.log([]); // []


// Méthode de l'objet vs méthode statique
// Person.prototype.greet vs Person.getClass
const romain = new Person('Romain');
romain.greet(); // (instance method) appelée sur l'objet
Person.getClass(); // (static method) appelée sur la fonction/classe

console.log("ABC".charCodeAt(0)); // 65 instance method
console.log(String.fromCharCode(65, 66, 67)); // 'ABC' static method


// Tester le type
console.log(person1 instanceof Person); // true


const user = {
  name: 'John',
  age: 30,
};

const newUser = {
  age: 25,
  email: 'jane@example.com'
};

// On aimerait fusionner les 2 objets
// {
//   name: 'John',
//   age: 25,
//   email: 'jane@example.com'
// }

// On peut utiliser Object.assign pour fusionner les objets
const mergedUser = Object.assign({}, user, newUser);
console.log(mergedUser); // { name: 'John', age: 25, email: 'jane@example.com' }

// Object.assign modifie le premier objet passé en paramètre -> PATCH
Object.assign(user, newUser);
console.log(user); // { name: 'John', age: 25, email: 'jane@example.com' }

// On peut aussi boucler sur les propriétés d'un objet
for (const key in user) {
  console.log(`${key}: ${user[key]}`); // name: John, age: 25, email:
}

// De façon plus moderne, on peut utiliser Object.entries pour obtenir un tableau de paires clé/valeur
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`); // name: John, age: 25, email: jane@example.com
}
// On peut aussi utiliser Object.keys pour obtenir un tableau des clés de l'objet
for (const key of Object.keys(user)) {
  console.log(key); // name, age, email
}

// PUT
const newUser2 = {
  ...user, // avec les valeur du body
  id: 1, // avec la valeur de l'URL
}
