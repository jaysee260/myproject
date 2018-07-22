
const config = require('./config').init();
const { b } = require('./console');

// Leverage the use of NODE_ENV to conditionally set up environment

if (process.env.NODE_ENV === 'production' || config.ENV === 'production') {

  console.log(b(":: MODE = PRODUCTION ::"));
  process.env.NODE_ENV = 'production';
  require('./server.js');

} else if (process.env.NODE_ENV === 'development' || config.ENV === 'development') {

  console.log(b(":: MODE = DEVELOPMENT ::"));
  process.env.NODE_ENV = 'development';
  require('./server.js');

} 