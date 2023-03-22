const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/messages', (req, res) => {
  console.log(req.headers);
  res.send('Messages list');
});

router.post('/messages', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send(`Added "${req.body.message}" message`);
});

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
