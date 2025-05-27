// Exercice : Jeu du plus ou moins
// 1/ Ecrire une fonction qui génère un entier aléatoire entre 0 et 100 (API Math sur MDN)
// 2/ Demander et récupérer la saisie (API Readline sur Node.js) puis afficher si le nombre est plus grand, plus petit ou trouvé
// 3/ Pouvoir trouver en plusieurs tentatives (problème d’asynchronisme)
// 4/ Stocker les essais dans un tableau et les réafficher entre chaque tour (API Array sur MDN)
// 5/ Afficher une erreur si la saisie n'est pas un nombre (API Number sur MDN)
// Attention, le callback de question est toujours appelé avec un type String, à convertir si besoin.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, // le clavier
  output: process.stdout // la console
});

function jouer() {
  rl.question('Entrez un nombre entre 0 et 100 : ', (answer) => {
    console.log(`Vous avez saisi : ${answer}`);

    // arrête d'écouter le clavier, comme c'est la seule tache de ce programme
    // le programme se termine
    // donc à appeler quand le nombre a été trouvé
    // rl.close();

    // pour rejouer
    // jouer();
  });

}
jouer();

// ^
// |
// |                                     [question  ]
// |[question]                           [jouer     ]     [rl.close  ]
// |[jouer   ] ⟳                         [taskAnswer] ⟳   [taskAnswer]
// +-------------------------------------60\n--------------10\n----->
