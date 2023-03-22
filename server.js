const express = require('express');
const router = express.Router();

const app = express();

app.use(router);

router.get('/messages', (req, res) => {
  res.send('Messages list');
});

router.post('/messages', (req, res) => {
  res.send('Added message');
});

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
