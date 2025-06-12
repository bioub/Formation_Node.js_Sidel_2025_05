// Stream est une abstraction pour gérer des flux de données en Node.js.
// Exemple :
// - un fichier est un flux de données
// - un requete network est un flux de données
// - une requête HTTP est un flux de données
// - le clavier est un flux de données
// Un flux de données peut être en lecture, en écriture ou les deux.
// c'est une suite d'octets qui vont être reçus ou emits dans le temps

import { Readable, Writable, Transform, Duplex } from 'node:stream';

// Readable : un flux de données en lecture
// Writable : un flux de données en écriture
// Duplex : un flux de données qui peut être lu et écrit, mais qui ne transforme pas les données
// Transform : un flux de données qui peut être lu et écrit, mais qui transforme les données en cours de route

// Exemple de Readable Stream sur une fichier
import { createReadStream } from 'node:fs';
const readableStream = createReadStream('long-file.txt', { encoding: 'utf8' });
readableStream.on('open', () => {
  console.log('Stream opened successfully.');
});
readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.slice(0, 10), '...', 'Size', chunk.length); // Affiche les 100 premiers caractères du chunk
});
readableStream.on('end', () => {
  console.log('No more data to read.');
});
readableStream.on('error', (err) => {
  console.error('Error reading stream:', err);
});

// Pour vérifier si le flux est un Readable Stream
console.log('Is readableStream a Readable Stream?', readableStream instanceof Readable);
// Il a un méthode read 
console.log('Readable Stream read method:', readableStream.read);

// En écriture, on peut utiliser un Writable Stream
import { createWriteStream } from 'node:fs';
const writableStream = createWriteStream('output.txt', { encoding: 'utf8' });
writableStream.on('open', () => {
  console.log('Writable stream opened successfully.');
});
writableStream.on('error', (err) => {
  console.error('Error writing to stream:', err);
});
// Pour vérifier si le flux est un Writable Stream
console.log('Is writableStream a Writable Stream?', writableStream instanceof Writable);
// Il a un méthode write
console.log('Writable Stream write method:', writableStream.write);
// On peut écrire des données dans le flux
writableStream.write('Hello, world!\n');
writableStream.write('This is a test.\n');
// On peut fermer le flux
writableStream.end('Les derniers octets', () => {
  console.log('Writable stream closed successfully.');
});

// Combinaison de stream
// On peut combiner un Readable Stream et un Writable Stream
// Par exemple recopier un fichier volumeux dans un autre fichier
const copyStream = createReadStream('long-file.txt')
  .pipe(createWriteStream('copy-long-file.txt'));
copyStream.on('finish', () => {
  console.log('File copied successfully.');
});

// Similaire à un programme en ligne de commande
// cat long-file.txt | wc -c > count.txt

// Exemple avec un Transform Stream
// Zipper un fichier texte
import { createGzip } from 'node:zlib';

// (createGzip() est un Transform Stream qui compresse les données en utilisant l'algorithme gzip)

const gzipStream = createReadStream('long-file.txt')
  .pipe(createGzip())
  .pipe(createWriteStream('long-file.txt.gz'));

// cat long-file.txt | gzip > long-file.txt.gz

  gzipStream.on('finish', () => {
    console.log('File compressed successfully.');
  });