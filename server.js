const express = require('express');
const bodyParser = require('body-parser');
const networkRouter = require('./network/network.router');

const app = express();
app.use(bodyParser.json());

networkRouter(app);

app.use('/app', express.static('public'));

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
