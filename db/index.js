const db = require('mongoose');

db.Promise = global.Promise;

async function connect(uri) {
  db.set('strictQuery', false);
  await db.connect(uri, {
    useNewUrlParser: true,
  });

  console.log('[db] Successfully connected');
}

module.exports = connect;
