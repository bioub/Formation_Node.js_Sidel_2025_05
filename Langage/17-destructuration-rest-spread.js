// Destructuration de tableaux

const names = ['Alice', 'Bob', 'Charlie', 'David'];

// const first = names[0];
// const second = names[1];

//    [Alice, Bob   ]
const [first, second] = names;
console.log(first);  // Alice
console.log(second); // Bob

// Pour passer certaines valeurs en début de tableau
//       [Alice, Bob, Charlie, David]
// const [first,    , third  ] = names;

const fullName = 'Romain Bohdanowicz';
// const tmp = fullName.split(' ');
// const prenom = tmp[0];
// const nom = tmp[1];
const [prenom, nom] = fullName.split(' ');

console.log(prenom); // Romain
console.log(nom);  // Bohdanowicz

const numbers = [1, 2];

// Combiné avec une valeur par défaut
//    [1  , 2  ]
const [nb1, nb2, nb3 = 3] = numbers;

// REST
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4)) // 10

// REST (à gauche d'une affectation)
// Transforme la syntaxe liste de valeurs en tableau
// Ici : 3, 4 devient [3, 4]

// REST peut aussi être utilisé pendant la destructuration
const [firstNumber, ...restNumbers] = [1, 2, 3, 4, 5];
console.log(firstNumber); // 1
console.log(restNumbers); // [2, 3, 4, 5]

// SPREAD (à droite d'une affectation)
// Transformation inverse de REST
// On transforme un tableau en liste de valeurs
// Ici : ['Alice', 'Bob', 'Charlie', 'David'] devient 'Alice', 'Bob', 'Charlie', 'David'

// const names = ['Alice', 'Bob', 'Charlie', 'David'];

const cloneNames = [...names]; // idem [names[0], names[1], names[2], names[3]]
console.log(cloneNames); // ['Alice', 'Bob', 'Charlie', 'David']

// Tout ce qu'on vient de voir avec les tableaux fonctionne aussi avec les objets
const person = {
  lastName: 'Bohdanowicz',
  firstName: 'Romain',
  age: 30,
};

// const firstNameObj = person.firstName;
// const lastNameObj = person.lastName;

// Avec la destructuration d'objets
//    { firstName: 'Romain'    , lastName: 'Bohdanowicz', age: 30 }
const { firstName: firstNameObj, lastName: lastNameObj } = person;

// On peut aussi combiner avec une valeur par défaut
const { firstName: firstNameObj2, lastName: lastNameObj2, age: ageObj = 25 } = person;

// On peut aussi combiner avec shorthand
// const { firstName: firstName, lastName: lastName, age: age = 25 } = person;
const { firstName, lastName, age = 25 } = person; // Pas de renommage, juste un raccourci


// On peut combiner avec REST (depuis ES2018)
const { firstName: firstNameObj3, ...restObj } = person;
console.log(firstNameObj3); // Romain
console.log(restObj); // { lastName: 'Bohdanowicz', age: 30 }

// SPREAD sur objets (depuis ES2018)
const clonePerson = { ...person }; // idem { lastName: 'Bohdanowicz', firstName: 'Romain', age: 30 }
