// Import configs and console tools
const config = require('./config').init();
const { g, y, r } = require('./console');

// Declare global variables
const ENV = process.env.NODE_ENV || config.ENV || 'development';
const PORT = process.env.PORT || config.PORT || 3000;

// Import dependencies
const path = require('path');
const express = require('express');
const app = express();

// Set up express middleware
if (ENV === 'development') {
  // Use morgan ONLY if in development mode
  const logger = require('morgan');
  app.use(logger('dev'));
}

// app.use( express.static(__dirname + "../dist") );

// Initialize DB Connection;
// Pass it ENV variable.
require('./db')(ENV);


///// Routes /////
app.get('/webpack', (req, res) => {
  res.send('hello from express.js');
});

// app.get('/site', (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../", "dist", "index.html"));
// });

app.get('/*', (req, res) => {
  res.send("Hello from my project's server in progress :)");
});

// Start server
app.listen(PORT, () => {
  console.log(y(`:: Server running on port ${PORT} ::`));
});