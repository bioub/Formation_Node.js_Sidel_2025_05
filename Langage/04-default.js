function sumWithoutDefault(a, b, c) {
  return a + b + c;
}

console.log(sumWithoutDefault(1, 2)); // Affiche NaN (Not a Number) (1 + 2 + undefined)

function sumWithIf(a, b, c) {
  if (c === undefined) {
    c = 0;
  }
  return a + b + c;
}

console.log(sumWithIf(1, 2)); // Affiche 3

function sumWithOr(a, b, c) {
  c = c || 0; // Uniquement si la valeur par défaut est falsy (undefined, null, 0, '', false etc.)
  return a + b + c;
}

console.log(sumWithOr(1, 2)); // Affiche 3

// Depuis ES2015 = MEILLEURE PRATIQUE
function sumWithDefault(a, b, c = 0) {
  return a + b + c;
}
console.log(sumWithDefault(1, 2)); // Affiche 3

// Depuis ES2020 : Nullish Coalescing Operator (??)
function sumWithCoalescing(a, b, c) {
  c = c ?? 0; // affecte 0 si c est undefined ou null uniquement
  return a + b + c;
}

// Depuis ES2021 : Logical Assignment Operator (??=)
function sumWithCoalescingAssignment(a, b, c) {
  c ??= 0; // affecte 0 si c est undefined ou null uniquement
  return a + b + c;
}

// Pour un élément d'un tableau ou d'un objet, le Nullish Coalescing Operator
// est la meilleure option pour gérer les valeurs par défaut.
function sumArrayWith3Elements(arr) {
  return arr[0] + arr[1] + (arr[2] ?? 0); // Utilise le Nullish Coalescing Operator pour gérer les cas où arr[2] est undefined
}

console.log(sumArrayWith3Elements([1, 2, 3])); // Affiche 6
console.log(sumArrayWith3Elements([1, 2])); // Affiche 3 (1 + 2 + 0)
