// Ici on pourrait créer avec net un serveur HTTP basique
import { createServer } from 'node:net';

const server = createServer((socket) => {
  console.log('Client connected:', socket.remoteAddress, socket.remotePort);

  // Écoute des données envoyées par le client
  socket.on('data', (data) => {
    console.log('Received data from client:', data.toString());

    // Répondre au client (doit etre une réponse HTTP valide)
    socket.write('HTTP/1.1 200 OK\r\n' +
      'Content-Type: text/plain\r\n' +
      'Connection: close\r\n' +
      '\r\n' +
      'Hello from the server!\n');
    // Fermer la connexion après avoir répondu
    socket.end(); 
  });

  // Gérer la fermeture de la connexion
  socket.on('end', () => {
    console.log(
      'Client disconnected:',
      socket.remoteAddress,
      socket.remotePort,
    );
  });

  // Gérer les erreurs
  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

// Une fois listen appelé, le serveur ne s'arrête pas automatiquement
// Appeler server.close() pour arrêter le serveur
// ou CTRL+C dans le terminal pour arrêter le serveur

// Une conséquence est que si on modifie le code du serveur
// il faut le redémarrer manuellement pour que les changements prennent effet
// Pour éviter cela, on peut utiliser un outil comme nodemon (https://nodemon.io/)
// Depuis Node.js 18, on peut aussi utiliser l'option --watch pour redémarrer automatiquement le serveur
server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
