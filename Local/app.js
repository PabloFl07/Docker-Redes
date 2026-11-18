/**
 * Node.js App based on Express
 */
const express = require('express');
const app = express();

// Alwaysdata asigna PORT y IP/HOST como variables de entorno
const PORT = normalizePort(process.env.PORT || '3000');
const HOST = process.env.IP || process.env.HOST || '0.0.0.0';

app.get('/', (req, res) => res.send('Redes IA - Local'));

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
