const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./network/response');

const app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/messages', (req, res) => {
  console.log(req.headers);
  response.success(req, res, 'Messages list', 200);
});

router.post('/messages', (req, res) => {
  console.log(req.body);
  if (req.query.error == 'ok') {
    response.error(req, res, 'Simulated error', 400);
  } else {
    response.success(req, res, 'Correct response', 201);
  }
});

app.use('/app', express.static('public'));

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
