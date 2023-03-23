const express = require('express');
const router = express.Router();
const response = require('../../network/network.response');
const controller = require('./messages.controller.js');

router.get('/', (req, res) => {
  controller
    .getMessages()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Invalid information', 400, err);
    });
});

router.patch('/:id', (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

module.exports = router;
