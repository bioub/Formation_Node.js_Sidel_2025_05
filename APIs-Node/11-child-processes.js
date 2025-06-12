import { exec, fork } from 'node:child_process';
import { promisify } from 'node:util';

// Pour utiliser exec avec await, 2 options sont possibles :
// 1. Utiliser promisify pour transformer exec en fonction asynchrone
// 2. Utiliser un bibliothèque tierce comme execa qui gère les promesses nativement

const execAsync = promisify(exec);

const { stdout, stderr } = await execAsync('node --version');
console.log('Node.js version:', stdout.trim());

