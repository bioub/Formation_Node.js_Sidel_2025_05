import os from 'node:os';

// Informations sur le système d'exploitation
console.log('Operating System:', os.type()); // 'Linux', 'Darwin', 'Windows_NT', etc.
console.log('OS Release:', os.release()); // Version du système d'exploitation
console.log('OS Architecture:', os.arch()); // 'x64', 'arm64', etc.
console.log('OS Platform:', os.platform()); // 'linux', 'darwin', 'win32', etc.
console.log('OS Hostname:', os.hostname()); // Nom de l'hôte du système
console.log('OS Uptime:', os.uptime(), 'seconds'); // Temps de fonctionnement du système en secondes
console.log('OS Total Memory:', os.totalmem(), 'bytes'); // Mémoire totale du système
console.log('OS Free Memory:', os.freemem(), 'bytes'); // Mémoire libre du système
console.log('OS Load Average:', os.loadavg()); // Moyenne de charge du système sur 1, 5 et 15 minutes
console.log('OS Network Interfaces:', os.networkInterfaces()); // Interfaces réseau du système
console.log('OS CPU Info:', os.cpus()); // Informations sur les CPU du système
console.log('OS User Info:', os.userInfo()); // Informations sur l'utilisateur actuel
console.log('OS Temporary Directory:', os.tmpdir()); // Répertoire temporaire du système