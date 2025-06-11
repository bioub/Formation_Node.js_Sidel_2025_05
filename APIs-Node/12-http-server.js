import { createServer, Server as HttpServer } from 'node:http';
import { Server as NetServer } from 'node:net';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {

  console.log(`Request received: ${req.method} ${req.url}`);

  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString(); // Convertit le Buffer en chaîne de caractères
  });

  req.on('end', () => {
    const parsedBody = body ? JSON.parse(body) : {};
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello ' + (parsedBody.name || 'World') + '\n');
  });

  
});

console.log(server instanceof HttpServer); // true
console.log(server instanceof NetServer); // true

// L'event error vient de la classe Server de net
// donc il faut aussi lire la doc de net :
// https://nodejs.org/api/net.html#class-netserver
server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
