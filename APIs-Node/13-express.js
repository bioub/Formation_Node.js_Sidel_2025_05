import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
const port = 3000;

// Middleware global (s'applique à toutes les requêtes)
// express.json() est un middleware qui parse le corps des requêtes en JSON
// et le rend accessible via req.body (La lib s'appelle body-parser dans Express 4.x, mais depuis Express 4.16.0, il est intégré directement)
app.use(express.json()); // Middleware pour parser le JSON dans le corps des requêtes

// Route :
// Associe une fonction à un requete HTTP (couple METHOD + URL)
app.get('/', (req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World!');
  res.send('Hello World!');
});

app.get('/', (req, res) => {
  // Conflit : pas accessible car en 2e position
  res.send('Hello World 2!');
});

app.get('/with-cookie-read', cookieParser(), (req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  
  // Lecture de tous les cookies
  console.log('Cookies:', req.headers.cookie);
  // req.cookies n'est disponible que si on utilise le middleware cookieParser()
  console.log('Cookie tracking-id :', req.cookies['tracking-id']);
  
  res.status(200).json({
    message: 'Hello with cookie!'
  });
});

app.get('/with-cookie-set', cookieParser(), (req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  
  // Définition d'un cookie
  if (!req.cookies['tracking-id']) {
    res.cookie('tracking-id', '1234567890', { maxAge: 900000, httpOnly: true });
  }

  res.status(200).json({
    message: 'Cookie set!'
  });
});

app.get('/with-ip', (req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  
  // Lecture de l'adresse IP du client
  // const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  // console.log('Client IP:', ip);
  console.log('Client IP:', req.ip);
  console.log('Client IP:', req.ips); // si proxyé, renvoie un tableau d'IPs
  
  res.status(200).json({
    message: 'Hello with IP!',
  });
});

app.get('/with-html', (req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  
  // Envoi d'une réponse HTML
  res.status(200).send(`
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        <p>Ip: ${req.ip}</p>
      </body>
    </html>
  `);
});

// Exemple de route avec un paramètre de requête
// A appeler avec l'URL : http://localhost:3000/hello?name=John
app.get('/hello', (req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  
  const name = req.query.name || 'World';
  res.status(200).json({
    message: `Hello ${name}!`
  });
});

// Pour faire de plus jolis URLs, on peut utiliser des paramètres de route
// Exemple de route avec un paramètre de route
// A appeler avec l'URL : http://localhost:3000/bonjour/John
app.get('/bonjour/:name', (req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  
  const name = req.params.name || 'Monde';
  res.status(200).json({
    message: `Bonjour ${name}!`
  });
});



// pour activer un middleware sur une route spécifique, on peut utiliser app.use('/route', middleware, callback)
// app.post('/echo', express.json(), (req, res) => {

app.post('/echo', (req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  console.log('Request body:', req.body);
  
  res.status(200).json({
    message: 'Echo',
    data: req.body
  });
});

app.delete('/delete', (req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  
  res.status(200).json({
    message: 'Delete successful'
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
