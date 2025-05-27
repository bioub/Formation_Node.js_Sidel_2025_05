const { log } = require("util");

const s1 = "Jean";
const s2 = s1;
s2 = "Eric";

console.log(s1); // Output: "Jean"

function changeString(str) {
  str = "Changed";
}
changeString(s1); // passage par valeur
// s1 remains unchanged

const o1 = { s: 'Jean' };
const o2 = o1;
o2.s = 'Eric';

console.log(o1.s); // Output: "Eric"

const a1 = [1, 2, 3];
const a2 = a1;
a2[0] = 4;
console.log(a1[0]); // Output: 4

function changeArray(arr) {
  arr[0] = 99;
}

changeArray(a1); // passage par référence
console.log(a1[0]); // Output: 99

// Parfois on a besoin de faire une copie d'un objet ou d'un tableau pour éviter de modifier l'original

const copyObj = { ...o1 }; // shallow copy
const copyArr = [ ...a1 ]; // shallow copy

a1.reverse(); // Modifie a1
const copyArray2 = a1.toReversed(); // shallow copy, mais a1 est modifié


// Les chaines de caractères sont immuables, on ne peut pas les modifier
let prenom = 'Jean';
prenom[0] = 'j'; // Ne fonctionne pas, car les chaines de caractères sont immuables

prenom.replace('J', 'j'); // Renvoie une nouvelle chaine de caractères, mais ne modifie pas prenom

console.log(prenom); // Output: "Jean"
