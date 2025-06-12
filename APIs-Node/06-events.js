// la méthode .on permet d'écouter les événements
// elle vient de l'API EventEmitter de Node.js
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1); // Terminer le processus avec un code d'erreur
});

import { EventEmitter } from 'node:events';

console.log(process instanceof EventEmitter); // true

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Écouter un événement personnalisé
myEmitter.on('my-event', () => {
  console.log('An event occurred!');
});

// Émettre l'événement
myEmitter.emit('my-event');

// Écouter un événement avec des arguments
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});
// Émettre l'événement avec un argument
myEmitter.emit('greet', 'Alice');

// Ecouter une seule fois un événement
myEmitter.once('once-event', () => {
  console.log('This will only be logged once!');
});
myEmitter.emit('once-event');
myEmitter.emit('once-event'); // Ne sera pas loggé

// Arreter l'écoute d'un événement
const listener = () => {
  console.log('This will be logged only once.');
};
myEmitter.on('stop-event', listener);
myEmitter.emit('stop-event');
// myEmitter.removeListener('stop-event', listener);
// Alias pour removeListener
myEmitter.off('stop-event', listener);

// Retirer tous les écouteurs d'un événement
myEmitter.removeAllListeners('greet');