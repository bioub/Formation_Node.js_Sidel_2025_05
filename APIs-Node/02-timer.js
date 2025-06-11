// Il est possible d'être explicite sur l'importation de setTimeout (qui est une fonction globale dans Node.js) en utilisant l'importation depuis le module 'timers'.
import { setTimeout } from 'node:timers';

setTimeout(() => {
  console.log('1s has passed');
}, 1000);