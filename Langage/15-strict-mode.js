'use strict';

function hello() {
  prenom = 'John'; // avec "use strict", cela va générer une erreur car prenom n'est pas défini
  // sans "use strict", cela créerait une variable globale prenom
  console.log('Hello ' + prenom);
}

hello();


console.log('Hello ' + prenom);

// Il y a 2 endroits où on est en mode strict par défaut :
// - dans les modules ES6 (fichiers .mjs ou avec "type": "module" dans package.json)
// - dans les classes ES6
