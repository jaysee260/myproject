const config = require('./config').init();
const { g, y, r } = require('./console');

const ENV = process.env.NODE_ENV || config.ENV || 'development';
const PORT = config.PORT || process.env.PORT || 3000;

const express = require('express');
const app = express();

if (ENV === 'development') {
  const logger = require('morgan');
  app.use(logger('dev'));
}

// Initialize DB Connection
require('./db')(ENV);

app.get('/webpack', (req, res) => {
  res.send('hello from express.js');
});

app.get('/*', (req, res) => {
  res.send("Hello from my project's server in progress :)");
});

app.listen(PORT, () => {
  console.log(y(`:: Server running on port ${PORT} ::`));
});