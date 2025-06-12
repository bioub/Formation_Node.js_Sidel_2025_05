import http from 'node:http';
import dotenv from 'dotenv';

import app from './app.js';

dotenv.config();

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(process.env.PORT, () => {
  console.log('Server started on port ' + process.env.PORT);
});
