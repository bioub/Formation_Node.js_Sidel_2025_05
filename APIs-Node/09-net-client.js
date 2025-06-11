import { createConnection } from 'node:net';

// Par exemple avec net on peut se connecter à un serveur HTTP
// et voir les messages échangés (request et response HTTP)
const socket = createConnection({ port: 80, host: 'www.example.com' }, () => {
  console.log('Connected to server');
  // Envoyer une requête HTTP GET
  socket.write('GET / HTTP/1.1\r\nHost: www.example.com\r\nConnection: close\r\n\r\n');
});


// socket.on('connect', () => {
//   console.log('Connection established with the server.');
// });

// socket.on('error', (err) => {
//   console.error('Error connecting to server:', err);
// });

// socket.on('data', (data) => {
//   console.log('Received data from server:');
//   console.log(data.toString());
//   // Fermer la connexion après avoir reçu les données
//   socket.end();
// });

// socket.on('end', () => {
//   console.log('Disconnected from server.');
// });
// socket.on('close', () => {
//   console.log('Connection closed.');
// });

// Pour simplifier ce code là on peut aussi utiliser un stream
// ici socket est un Duplex stream
socket.pipe(process.stdout); // Affiche les données reçues dans la console