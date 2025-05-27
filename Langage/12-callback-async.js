// setTimeout(() => console.log('A'), 500);
// setTimeout(() => console.log('B'), 0);
// setTimeout(() => console.log('C'), 1000);
// setTimeout(() => console.log('D'), 500);

// console.log('E');

// Ici les callbacks sont asynchrones, contrairement aux callbacks synchrones
// ils ne sont pas exécutés immédiatement

// Syntaxiquement, les callbacks synchrones ou asynchrones sont identiques
// ça dépend de l'API qui les utilise, ex :
// map -> synchrone
// setTimeout -> asynchrone (le plus souvent)

// Dans le cas particulier des timers (setTimeout, setInterval, etc.),
// on peut prédire l'ordre d'exécution des callbacks

// Ici les lettres vont s'afficher dans l'ordre suivant :
// E, B, A, D, C

// Si cela avait été des callbacks synchrones,
// l'ordre d'exécution aurait été :
// A, B, C, D, E (avec des pauses en fonction de la durée des timers)

// Pour simplifier on peut dire que les callbacks synchrones sont exécutés
// immédiatement, tandis que les callbacks asynchrones sont exécutés plus tard.

// Plus précisément, c'est une histoire de pile d'appel de fonction (call stack)
// synchrone : appelé dans la même pile d'appel que la fonction appelante
// asynchrone : appelé dans une autre pile d'appel qui démarera dans le futur

// Exemple Synchrone
const names = ['Alice', 'Bob', 'Charlie'];
function greet(name) {
  console.log(`Hello, ${name}!`);
}
names.forEach(greet);
console.log('Done!');

// Pile d'appel de fonction
// ^
// |       [log  ][log  ][log  ]
// |[for { [greet][greet][greet] }]
// |[forEach                      ][log   ]
// +-------------------------3ms----------------------> temps
// Sortie  Alice  Bob    Charlie   Done!

// Exemple Asynchrone
setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// Pile d'appel de fonction
// ^
// |
// |                                                              [log  ]          [log     ][log  ]          [log      ]
// |[setTimeout][setTimeout][setTimeout][setTimeout][log  ] ⟳     [taskB] ⟳        [taskA   ][taskD] ⟳        [taskC    ]
// +------------0-------------------------------------------------5ms---------------500ms----502ms-------------1000--------> temps
//                                                  E             B                 A        D                C

// File d'attente de tâches (task queue)
// 0ms : taskB
// 5ms :
// 500ms : taskA, taskD
// 501ms : taskD
// 502ms :
// 1000ms : taskC
// 1001ms :

// Le code asynchrone peut être exécuté plus tard, car au niveau de la plateforme
// le code JavaScript est exécuté dans une boucle, appelée boucle d'événements (event loop).
// Ces plateformes (navigateur, Node.js, etc.) sont en général développées en C++
// schématiquement cette boucle C++ ressemble à ça :
// do {
//   if (taskQueue.length > 0) {
//     const task = taskQueue.shift(); // On récupère la première tâche de la file d'attente
//     task(); // On l'exécute
//   } else {
//     waitForNextEvent(); // On attend le prochain événement
//   }
// } while (true);

// Pour approfondir le sujet, voir la conférence de Jake Archibald
// "In the Loop" (en anglais) : https://www.youtube.com/watch?v=cCOL7MC4Pl0

