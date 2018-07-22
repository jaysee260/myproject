const mongoose = require('mongoose');
const { g, r } = require('../console');


module.exports = (env = '') => {
  // enable the use of Promises
  mongoose.Promise = global.Promise;

  // If environment is undefined,
  // throw an "invalid URI" error.
  if (env !== '') {

    let keys = {}, dbUri = '';

    // If in development, connect to local Mongo
    if (env === 'development') {
      keys = require('../config/').init().DB[env];
      dbUri = keys.url.replace('<port>', keys.port)
                      .replace('<name>', keys.name);
    }
    
    // If in production, connect to mLab
    if (env === 'production') {
      keys = require('../config').init().DB[env];
      dbUri = keys.url.replace('<username>', keys.username)
                      .replace('<password>', keys.password)
                      .replace('<name>', keys.name);
    }

    // Open connection to db
    mongoose.connect(dbUri, { useNewUrlParser: true });

    // Establish reference to db connection
    const db = mongoose.connection;

    // If an error occurs whilst attempting to connect to db,
    // throw an error with a message.
    db.on('error', () => {
      let err_msg = ":: An error occurred while attempting to connect to the database. Please make sure that the URI is valid ::";
      throw new Error(r(err_msg));
    });

    // If db connection is successfull, log a notification
    db.once('open', () => {
      let db_env = env === 'development' ? '(local)' : '(cloud)';
      console.log(g(`:: Successfully connected to the database ${db_env} ::`));
    });

  } else {

    let err_msg = ":: No DB URI was provided; please provide a valid DB URI ::"
    throw new Error(r(err_msg));

  }
  
}