function sumVariadicWithArguments(a, b) {
  // Une pseudo variable est une variable qui est créé
  // automatiquement par JavaScript au moment de l'appel de la fonction
  // En JavaScript il en existe 4 :
  // arguments, this, super et new.target

  // arguments contient tous les arguments passés à la fonction
  // (y compris ceux déjà déclarés, ici a et b)
  // Ce n'est pas un tableau, mais on peut boucler dessus et y accéder par index,
  // mais on ne peut pas utiliser les méthodes de tableau comme map, filter, toReversed, etc.
  // ou le convertir en tableau avec Array.from()
  let result = a + b;

  for (let i = 2; i < arguments.length; i++) {
    result += arguments[i]; // On ajoute chaque argument supplémentaire
  }

  return result;
}

console.log(sumVariadicWithArguments(1, 2)); // Affiche 3
console.log(sumVariadicWithArguments(1, 2, 3, 4, 5)); // Affiche 15

// Utilisation de la syntaxe rest pour une fonction variadique
// Depuis ES2015
// Bonne Pratique (on utilise plus arguments)
function sumVariadicWithRest(a, b, ...args) {
  // args peut être nommé autrement (nbs, numbers, etc.)
  // args est un tableau contenant tous les arguments passés à la fonction
  let result = a + b;

  for (const arg of args) {
    result += arg; // On ajoute chaque argument
  }

  return result;
}
