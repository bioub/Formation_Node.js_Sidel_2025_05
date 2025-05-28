import fs from 'node:fs';

// Synchronous file read
const packageJsonContent = fs.readFileSync('package.json', 'utf8');
console.log(packageJsonContent);

// ^
// |
// |
// |[readFileSync                        ][log]
// +--------------------------------------------------------->


// Asynchronous file read
fs.readFile('package.json', 'utf8', (err, packageJsonContent) => {
  console.log(packageJsonContent);
});

// ^
// |
// |                                         [log]
// |[readFile] ⟳                             [callback function]
// +---------------------------------------------------------------->

// A choisir il faut mieux utiliser la version asynchrone
// car elle ne bloque pas l'exécution du programme
// et permet de faire d'autres choses pendant la lecture du fichier
// (par exemple, lire d'autres fichiers, faire des requêtes réseau, etc.)

// En revanche, la version synchrone bloque l'exécution du programme
// jusqu'à ce que le fichier soit lu, ce qui peut être problématique
// si le fichier est volumineux ou si la lecture prend du temps.
