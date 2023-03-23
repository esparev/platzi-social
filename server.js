const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/network.router');

db('mongodb://root:admin@localhost:27017/?authMechanism=DEFAULT');

const app = express();
app.use(bodyParser.json());

router(app);

app.use('/app', express.static('public'));

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
