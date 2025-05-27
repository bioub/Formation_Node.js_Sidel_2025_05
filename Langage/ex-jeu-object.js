// Exercice 1
// Créer un namespace object Random qui regroupe les 4 fonction suivante
// getRandom, getRandomArbitrary, getRandomInt, getRandomIntInclusive
// de sorte à créer entierAlea comme ceci :
// const entierAlea = Random.getRandomInt(0, 100);
function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// NE PAS TOUCHER CETTE LIGNE
const readline = require('readline');


function jouer() {
  if (essais.length) {
    console.log(`Vos essais précédents : ${essais.join(', ')}`);
  }

  rl.question('Entrez un nombre entre 0 et 100 : ', (answer) => {
    console.log(`Vous avez saisi : ${answer}`);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.error('Erreur : vous devez saisir un nombre entier !');
      return jouer();
    }

    if (entierSaisi < 0 || entierSaisi > 100) {
      console.error('Erreur : le nombre doit être compris entre 0 et 100 !');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('C\'est plus !');
      jouer();
    }
    else if (entierSaisi > entierAlea) {
      console.log('C\'est moins !');
      jouer();
    }
    else {
      console.log('Bravo, vous avez trouvé !');
      rl.close();
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin, // le clavier
  output: process.stdout, // la console
});

const entierAlea = getRandomInt(0, 100);
const essais = [];

jouer();

// Exercice 2
// Refactoriser le code précédent pour qu'il soit orienté objet
// Pour cela créer une classe Jeu qui contient les propriétés et méthodes suivantes :
// - rl : l'interface de lecture/écriture
// - entierAlea : le nombre aléatoire à trouver
// - essais : le tableau des essais précédents
// - jouer() : la méthode qui lance le jeu
// de sorte à démarrer le jeu comme ceci :
// const jeu = new Jeu();
// jeu.jouer();

// Exercice 3
// Utiliser options pour paramétrer le jeu
// de sorte à pouvoir écrire :
// const jeu = new Jeu();
// const jeu = new Jeu({ min: 10, max: 20 });
// const jeu = new Jeu({ max: 20 });
// const jeu = new Jeu({ min: 90 });
// const jeu = new Jeu({ });
// Prévoir des valeurs par défaut pour min et max (0 et 100)
