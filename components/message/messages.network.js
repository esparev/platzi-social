const express = require('express');
const router = express.Router();
const response = require('../../network/network.response');

router.get('/', (req, res) => {
  console.log(req.headers);
  response.success(req, res, 'Messages list', 200);
});

router.post('/', (req, res) => {
  console.log(req.body);
  if (req.query.error == 'ok') {
    response.error(req, res, 'Simulated error', 400);
  } else {
    response.success(req, res, 'Correct response', 201);
  }
});

module.exports = router;
