// Process tout ce qui est en rapport avec le processus node.js en cours d'exécution, comme les arguments de la ligne de commande, l'environnement, les signaux, etc. Il est souvent utilisé pour gérer le cycle de vie de l'application et interagir avec le système d'exploitation.
import minimist from 'minimist';
import process from 'node:process';
// Process est un objet global dans Node.js qui fournit des informations et des contrôles sur le processus en cours d'exécution.

// Arguments de la ligne de commande
console.log('Command line arguments:', process.argv.slice(2));

// Pour manipuler les arguments de la ligne de commande, il est recommandé
// de passer par une bilbiothèque comme yargs, commander.js, minimist, etc.
console.log('Command line arguments:', minimist(process.argv.slice(2)));

// Environnement
console.log('Environment variables:', process.env);
console.log('PATH:', process.env.PATH);

// Pour accéder à une variable d'environnement spécifique, utilisez process.env.NOM_DE_LA_VARIABLE
console.log('Node.js version:', process.version);

// Informations sur le processus
console.log('Process ID:', process.pid);
console.log('Process title:', process.title);
console.log('Process platform:', process.platform); // 'darwin', 'linux', 'win32', etc.
console.log('Process architecture:', process.arch); // 'x64', 'arm64', etc.

// Informations sur la mémoire
console.log('Memory usage:', process.memoryUsage());

// Informations sur le répertoire de travail actuel
console.log('Current working directory:', process.cwd());
// Changement du répertoire de travail
process.chdir('/tmp');
console.log('Changed working directory:', process.cwd());

// Si on faire référence à un fichier ou un répertoire de façon relative
// celà dépend du répertoire de travail actuel (CWD) et pas du dossier du script en cours d'exécution.

// Signaux
// Processus peut écouter des signaux du système d'exploitation
process.on('SIGINT', () => {
  console.log('Received SIGINT (Ctrl+C). Exiting gracefully...');
  process.exit(0);
});

// IO
// Processus peut lire et écrire sur les flux d'entrée/sortie standard
process.stdin.on('data', (data) => {
  console.log(`Received data from stdin: ${data}`);
});
process.stdout.write('Hello from stdout!\n');
process.stderr.write('Hello from stderr!\n');

// Gestion des erreurs
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1); // Terminer le processus avec un code d'erreur
});

// Gestion de la sortie
process.on('exit', (code) => {
  console.log(`Process exiting with code: ${code}`);
});

// Pour terminer le processus avec un code de sortie spécifique
process.exit(0); // 0 pour succès, 1 pour erreur

console.log('Ne sera pas affiché car le processus se termine avant cette ligne.');