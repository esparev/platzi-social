const express = require('express');
const app = express();
const server = require('http').Server(app);

const socket = require('./socket');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/network.router');

db('mongodb://root:admin@localhost:27017/?authMechanism=DEFAULT');

app.use(bodyParser.json());

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
